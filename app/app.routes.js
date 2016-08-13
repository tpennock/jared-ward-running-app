'use strict';

// UI Router rule function to strip any trailing slashes on url paths
var stripTrailingSlashes = function($injector, $location) {
    var path = $location.path();
    if (path !== '/' && path.slice(-1) === '/') {
        $location.replace().path(path.slice(0, -1));
    }
};

angular.module('jwrApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .rule(stripTrailingSlashes)
            // index redirects
            .when('', '/')
        ;
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/pages/home.html',
                // controller: 'HomeCtrl as $home'
            })
            .state('apparel', {
                url: '/apparel',
                templateUrl: '/pages/apparel.html',
                // controller: 'ApparelCtrl as $apparel'
            })
            .state('bio', {
                url: '/meet-us',
                templateUrl: '/pages/bio.html',
                // controller: 'BioCtrl as $bio'
            })
            .state('coaching', {
                url: '/coaching',
                templateUrl: '/pages/coaching.html',
                // controller: 'CoachingCtrl as $coaching'
            })
        ;
    }
]);