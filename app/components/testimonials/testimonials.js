'use strict';

angular.module('jwrApp.blocks').component('jwrTestimonials', {
    controllerAs: '$testimonials',
    templateUrl: 'components/testimonials/testimonials.html',
    bindings: {},
    controller: function JwrTestimonialsCtrl($log) {
        var $testimonials = this;

        $("#owl-testimonials").owlCarousel({
            navigation: false,
            slideSpeed: 300,
            pagination: true,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: 4000,
            stopOnHover: true
        });
    }
});
