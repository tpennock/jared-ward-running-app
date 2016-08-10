'use strict';

angular.module('jwrApp.components').component('jwrContainer', {
    templateUrl: 'components/core/container/container.html',
    bindings: {},
    controller: function jwrContainerCtrl($log) {
        var $ctrl = this;

        $ctrl.links = [
            {
                label: 'Home',
                state: 'home'
            },
            {
                label: 'Apparel',
                state: 'apparel'
            },
            {
                label: 'Meet us',
                state: 'bio'
            },
            {
                label: 'Coaching',
                state: 'coaching'
            }
        ];

        $log.info('SHOWING: vivContainer component');
    }
});