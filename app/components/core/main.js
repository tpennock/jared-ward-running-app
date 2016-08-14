'use strict';

angular.module('jwrApp.core').controller('MainCtrl',
    function($rootScope, $scope, $state) {

        $rootScope.page = {
            title: ''
        };

        $rootScope.toTop = function() {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        };

    }
);
