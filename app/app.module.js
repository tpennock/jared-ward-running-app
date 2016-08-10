'use strict';

angular.module('jwrcApp', [
        // templates
        'jwrcApp.templates', // gulp-generated $templateCache module

        // non-core angular modules
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngMaterial',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'ngTouch',

        // third party modules
        'hmTouchEvents',
        'LocalStorageModule',
        'ui.router',
        'ui.mask'
    ])
    .constant('TweenMax', TweenMax)
    .constant('TimelineMax', TimelineMax)
    .constant('Modernizr', Modernizr)
    .run(function($rootScope, Modernizr) {
        Modernizr.addTest('firefox', function () {
            return !!navigator.userAgent.match(/firefox/i);
        });
    }
);

// templates
angular.module('jwrcApp.templates', []);