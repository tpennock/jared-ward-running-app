'use strict';

angular.module('jwrApp.blocks').component('jwrResults', {
    controllerAs: '$results',
    templateUrl: 'components/results/results.html',
    bindings: {},
    controller: function JwrResultsCtrl($log) {
        var $results = this;

        $('.statistic').appear(function() {
            $('.timer').countTo({
                speed: 4000,
                refreshInterval: 60,
                formatter: function (value, options) {
                    return value.toFixed(options.decimals);
                }
            });
        });

    }
});
