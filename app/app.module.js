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
        'ngMaterial',
        'ngRoute',
        'ngResource',
        'ngSanitize',
        // 'ngTouch',

        // third party modules
        'LocalStorageModule',
        'ui.router'
    ])
    .constant('TweenMax', TweenMax)
    .constant('TimelineMax', TimelineMax)
    .constant('Modernizr', Modernizr)
    .run(['$rootScope', 'Modernizr', function($rootScope, Modernizr) {
        Modernizr.addTest('firefox', function () {
            return !!navigator.userAgent.match(/firefox/i);
        });
    }
]);

// templates
angular.module('jwrApp.templates', []);
angular.module('jwrApp.components', []);