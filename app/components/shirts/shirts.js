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
                link: ''
            },
            {
                name: 'Jared Ward Running Co.',
                price: 20,
                image: 'img/jwrc/shirts/w2.png',
                link: ''
            },
            {
                name: 'Staches for State',
                price: 20,
                image: 'img/jwrc/shirts/w3.png',
                link: ''
            }
        ];

    }
});
