'use strict';

angular.module('jwrApp.core').component('jwrNav', {
    controllerAs: '$nav',
    templateUrl: 'components/core/nav/nav.html',
    bindings: {},
    controller: function JwrNavCtrl($log) {
        var $nav = this;

        $nav.navLinks = [
            {
                label: 'Home',
                state: 'home'
            },
            {
                label: 'Meet us',
                state: 'bio'
            },
            {
                label: 'Coaching',
                state: 'coaching'
            },
            {
                label: 'Apparel',
                state: 'apparel'
            }
        ];

        $nav.socialLinks = [
            {
                url: 'http://www.facebook.com',
                icon: 'fa-facebook'
            },
            {
                url: 'http://www.linkedin.com',
                icon: 'fa-linkedin'
            }
        ];
    }
});
