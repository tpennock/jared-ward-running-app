'use strict';

// UI Router rule function to strip any trailing slashes on url paths
var stripTrailingSlashes = function($injector, $location) {
    var path = $location.path();
    if (path !== '/' && path.slice(-1) === '/') {
        $location.replace().path(path.slice(0, -1));
    }
};

angular.module('jwrcApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .rule(stripTrailingSlashes)
            // index redirects
            .when('', '/')
        ;
        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: ''
            })

            .state('main.home', {
                url: '/',
                views: {
                    content: {
                        controller: 'GridCntl as $grid',
                        templateUrl: 'components/core/grid/grid.html'
                    }
                }
            })
        ;
    }
]);