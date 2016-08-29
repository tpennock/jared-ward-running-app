'use strict';

angular.module('jwrApp.blocks').component('jwrShirts', {
    controllerAs: '$shirts',
    templateUrl: 'components/shirts/shirts.html',
    bindings: {},
    controller: function JwrShirtsCtrl($log) {
        var $shirts = this;

        $shirts.list = [
            {
                name: 'Wardy',
                price: 20,
                image: 'img/jwrc/shirts/w1.png',
                link: 'https://jared-ward-running-co.myshopify.com/products/wardy-t-shirt'
            },
            {
                name: 'Jared Ward Running Co.',
                price: 20,
                image: 'img/jwrc/shirts/w2.png',
                link: 'https://jared-ward-running-co.myshopify.com/products/jared-ward-running-co-t-shirt'
            },
            {
                name: 'Staches for State',
                price: 20,
                image: 'img/jwrc/shirts/w3.png',
                link: 'https://jared-ward-running-co.myshopify.com/products/staches-for-state-t-shirt'
            }
        ];

    }
});
