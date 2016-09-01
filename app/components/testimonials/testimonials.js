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
                subTitle: ''
            },
            {
                quote: 'Dream big--dreaming is fun. Set realistic, attainable goals--reaching your goals is motivating. Celebrate the successes--recognizing wins is empowering.',
                name: 'Jared Ward',
                subTitle: ''
            },
            {
                quote: 'I never cross the finish line alone. I couldn\'t claim personal success for any accomplishment. Each success is the culmination of so many people around me that have sacrificed for the dream. Parents, coaches teammates, siblings, my wife and kids, and many other have all played crucial roles; I would be ignorant not to acknowledge their hand.',
                name: 'Jared Ward',
                subTitle: ''
            }
        ];

        $interval(function() {
            $("#owl-testimonials").owlCarousel({
                navigation: false,
                slideSpeed: 300,
                pagination: true,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: 9000,
                stopOnHover: true
            });
        }, 0, 1);

    }
});
