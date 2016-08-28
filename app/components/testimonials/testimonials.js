'use strict';

angular.module('jwrApp.blocks').component('jwrTestimonials', {
    controllerAs: '$testimonials',
    templateUrl: 'components/testimonials/testimonials.html',
    bindings: {},
    controller: function JwrTestimonialsCtrl($log, $interval) {
        var $testimonials = this;

        $testimonials.list = [
            {
                quote: 'I\'ve always felt like running for me is somewhere between a calling and a daily liberator.',
                name: 'Jared Ward',
                subTitle: 'Runner'
            },
            {
                quote: 'I\'ve always felt like running for me is somewhere between a calling and a daily liberator.',
                name: 'Jared Ward',
                subTitle: 'Runner'
            },
            {
                quote: 'I\'ve always felt like running for me is somewhere between a calling and a daily liberator.',
                name: 'Jared Ward',
                subTitle: 'Runner'
            }
        ];

        $interval(function() {
            $("#owl-testimonials").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                pagination: true,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: 4000,
                stopOnHover: true
            });
        }, 0, 1);

    }
});
