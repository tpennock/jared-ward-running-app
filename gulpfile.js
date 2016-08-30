'use strict';

// initialize all of our variables
var app, base, hostname, server;

//load all of our dependencies
//add more here if you want to include more libraries
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var saveLicence = require('uglify-save-license');
var sass = require('gulp-sass');
var liveReload = require('gulp-livereload');
var open = require('gulp-open');
var connect = require('connect');
var http = require('http');
var httpProxy = require('http-proxy');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var path = require('path');
var lr = require('tiny-lr');
var fs = require('fs');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var download = require('gulp-download');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var del = require('del');
var jshint = require('gulp-jshint');
var karma = require('karma').Server;
var symlink = require('gulp-symlink');
var usemin = require('gulp-usemin');
var replace = require('gulp-replace');
var argv = require('yargs').argv;
var sourceMaps = require('gulp-sourcemaps');
var annotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

//start our server
server = lr();

// Global config object
var config = {
    dirs: {
        app: 'app',
        dist: 'dist',
        scripts: 'scripts',
        styles: 'styles',
        tmp: '.tmp'
    },
    uglify: {
        output: {
            comments: saveLicence
        }
    },
    templateCache: {
        module: 'jwrApp.templates',
        standalone: true
        //TODO: convert all references to templates with ./
        //root: './'
    }
};

////////////////////////////////////////////////////////////////////////////
// Tasks for running a local development server
////////////////////////////////////////////////////////////////////////////

// This starts the server that serves the static content
gulp.task('webserver', function () {
    //start up the server
    app = connect()
        // Serve files from /app
        .use(serveStatic(path.resolve(config.dirs.app)))
        // Serve the main.css that resides in /.tmp
        .use(serveStatic(path.resolve(config.dirs.tmp), {'dotfile': 'allow'}))
        // Serve the index.html
        .use(serveIndex(path.resolve(config.dirs.app)));
    http.createServer(app).listen(8080);
});

// This will do a sass compile and concat of our scss files when they change
gulp.task('styles', function () {
    return gulp.src(['app/**/*.scss', '!app/js', '!app/js/**']) // ignore everything in app/libs
        .pipe(sourceMaps.init())
        // Do the sass compile and make sure we don't fail on errors
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write())
        // Concat into a single css file
        .pipe(concat('styles.css'))
        //catch errors
        .on('error', gutil.log)
        // Put main.css in the .tmp folder
        .pipe(gulp.dest('.tmp/styles'))
        // Notify LiveReload to refresh
        .pipe(liveReload());
});

// This task caches all of our template files as .tmp/scripts/templates.js when they change
gulp.task('template-cache', function () {
    return gulp.src(['app/**/*.html', '!app/index.html'])
        .pipe(minifyHTML())
        .pipe(templateCache('templates.js', config.templateCache))
        .pipe(gulp.dest('.tmp/scripts')) // put templates.js in the .tmp folder
        .pipe(liveReload()); // notify LiveReload to refresh
});

////////////////////////////////////////////////////////////////////////////
// Tasks used for builds/deploys
////////////////////////////////////////////////////////////////////////////

// This task compresses and copies all the images
gulp.task('images-deploy', function () {
    return gulp.src(['app/img/**/*'])
        .pipe(imageMin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'));
});

// This task does a sass compile, concatenation, minification, and copy for deployment
gulp.task('styles-deploy', function () {
    return gulp.src(['app/**/*.scss', '!app/js', '!app/js/**']) // ignore everything in app/js
        // Do the sass compile and make sure we don't fail on errors
        .pipe(sass())
        // Concat into a single css file
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        // Where to save our final, compressed css file
        .pipe(gulp.dest('dist/styles'));
});

// This task will minify the HTML, copy it, and do the individual js replacements
gulp.task('html-deploy', function() {
    gulp.src('app/index.html')
        // usemin replaces the individual script includes in index.html with
        // single scripts.js references (ex: build:js scripts/app.js)
        .pipe(usemin({
            html: [minifyHTML()], // minifies index.html
            css: [minifyCSS()],
            jsVendor: [uglify(config.uglify)], // third party libs
            jsApp: [annotate(), uglify()] // app.js
        }))
        .pipe(gulp.dest('dist'));
});

// This task caches all of our template files as scripts/templates.js
gulp.task('template-cache-deploy', function () {
    return gulp.src(['app/**/*.html', '!app/index.html']) // ignore app/index.html
        .pipe(minifyHTML())
        .pipe(templateCache('templates.js', config.templateCache)) // creates $templateCache module
        .pipe(annotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

// This task copies all of our required static files over
gulp.task('files-deploy', function() {
    gulp.src([
        'app/fonts/**/*',
        'app/*.{png,ico,txt}',
        'app/.htaccess'
    ], {'base': 'app'})
    .pipe(gulp.dest('dist'));
});

////////////////////////////////////////////////////////////////////////////
// Shared, general purpose tasks
////////////////////////////////////////////////////////////////////////////

// This task cleans our dist and .tmp directories
gulp.task('clean', function () {
    return del(['.tmp/**/*', 'dist/**/*']);
});

// This is the default task. It starts a server for development
// purposes with all files being watched for live reload purposes
gulp.task('default', ['clean'], function () {
    gulp.start('webserver', 'template-cache');
    liveReload.listen();
    // Watch these files and reload if any of them change
    // exclude libs/
    gulp.watch(config.dirs.app + '/**/*.{html,css,jpg,js,jpeg,gif,png,woff,ttf,svg}').on('change', function(file) {
        liveReload.changed(file.path);
    });
    // gulp.watch('app/**/*.scss', ['styles']); // exclude libs/
    gulp.watch('app/**/*.html', ['template-cache']);
});

// This is an alias for the default server task
gulp.task('server', ['default']);

//this is our deployment task, it will set everything for deployment-ready files
gulp.task('build', ['clean'], function () {
    gulp.start('html-deploy', 'images-deploy', 'template-cache-deploy', 'files-deploy');
});
