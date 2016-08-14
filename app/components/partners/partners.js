'use strict';

angular.module('jwrApp.blocks').component('jwrPartners', {
    controllerAs: '$partners',
    templateUrl: 'components/partners/partners.html',
    bindings: {},
    controller: function JwrPartnersCtrl($log) {
        var $partners = this;

        //TODO: this is throwing a js error for some reason
        $("#owl-partners").owlCarousel({
            autoPlay: 3000,
            pagination: false
        });
    }
});
