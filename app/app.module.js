'use strict';

angular.module('jwrApp', [
        // templates
        'jwrApp.templates', // gulp-generated $templateCache module

        // components
        'jwrApp.components',

        // non-core angular modules
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'ngTouch',

        // third party modules
        'LocalStorageModule',
        'ui.router'
    ])
    .run(['$rootScope', function($rootScope) {}
]);

// templates
angular.module('jwrApp.templates', []);
angular.module('jwrApp.components', []);