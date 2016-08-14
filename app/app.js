'use strict';

var jwrApp = angular.module('jwrApp', [
        // templates
        'jwrApp.templates', // gulp-generated $templateCache module

        // components
        'jwrApp.blocks',
        'jwrApp.core',

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

jwrApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/')
            .when('/home', '/')
            .otherwise('/')
        ;
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/pages/home.html'
                // controller: 'HomeCtrl as $home'
            })
            .state('apparel', {
                url: '/apparel',
                templateUrl: '/pages/apparel.html'
                // controller: 'ApparelCtrl as $apparel'
            })
            .state('bio', {
                url: '/meet-us',
                templateUrl: '/pages/bio.html'
                // controller: 'BioCtrl as $bio'
            })
            .state('coaching', {
                url: '/coaching',
                templateUrl: '/pages/coaching.html'
                // controller: 'CoachingCtrl as $coaching'
            })
        ;
    }
]);

// templates
angular.module('jwrApp.templates', []);
angular.module('jwrApp.blocks', []);
angular.module('jwrApp.core', []);