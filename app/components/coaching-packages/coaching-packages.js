'use strict';

angular.module('jwrApp.blocks').component('jwrCoachingPackages', {
    controllerAs: '$packages',
    templateUrl: 'components/coaching-packages/coaching-packages.html',
    bindings: {},
    controller: function JwrCoachingPackagesCtrl($log) {
        var $packages = this;

        $packages.list = [
            {
                name: 'Basic',
                price: 30,
                features: [
                    'Custom Fitness Plan by Jared',
                    'Access to Jared\'s weekly training tips'
                ],
                link: 'https://jared-ward-running-co.myshopify.com/products/basic-running-plan',
                color: ''
            },
            {
                name: 'Intermediate',
                price: 75,
                features: [
                    'Basic Running Plan',
                    '+',
                    '1-on-1 email access with Jared',
                    'Specialized racing advice'
                ],
                link: 'https://jared-ward-running-co.myshopify.com/products/intermediate-running-plan',
                color: ''
            },
            {
                name: 'Advanced',
                price: 150,
                features: [
                    'Intermediate Running Plan',
                    '+',
                    'Weekly Calls with Jared (30 min)',
                    'Individualized racing strategies and tips from Jared'
                ],
                link: 'https://jared-ward-running-co.myshopify.com/products/advanced-running-plan',
                color: ''
            },
            {
                name: 'Premium',
                price: '300',
                features: [
                    'Advanced Running Plan',
                    '+',
                    'Individual track sessions with Jared*',
                    'Real-time Coaching Tips',
                    'Monthly Dietitian assessments (30 min)**'
                ],
                link: 'https://jared-ward-running-co.myshopify.com/products/premium-running-plan',
                color: ''
            }
        ];

        $packages.listLength = $packages.list.length;

        $packages.getWowDelay = function(index) {
            var modifier = (1 / ($packages.listLength + 1)) * index;
            return modifier + (1 / ($packages.listLength + 1)) + 's';
        };

    }
});
