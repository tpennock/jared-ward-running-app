'use strict';

angular.module('jwrApp.core').component('jwrFooter', {
    controllerAs: '$footer',
    templateUrl: 'components/core/footer/footer.html',
    bindings: {},
    controller: function JwrFooterCtrl($log) {
        var $footer = this;

        $footer.today = new Date();

        $footer.socialLinks = [
            {
                icon: 'fa-facebook',
                url: 'https://www.facebook.com/jaredwardrunning/?fref=nf&pnref=story'
            },
            {
                icon: 'fa-linkedin',
                url: 'https://www.linkedin.com/company/jared-ward-running-co.?trk=mini-profile'
            }
        ];

    }
});
