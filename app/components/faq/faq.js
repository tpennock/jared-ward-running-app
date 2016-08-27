'use strict';

angular.module('jwrApp.blocks').component('jwrFaq', {
    controllerAs: '$faq',
    templateUrl: 'components/faq/faq.html',
    bindings: {},
    controller: function JwrFaqCtrl($log) {
        var $faq = this;

        var allPanels = $(".accordion > .panel-content").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".accordion .acc-panel > a").first().addClass("active");

        $(".accordion .acc-panel > a").on('click', function(){

            var current = $(this).parent().next(".panel-content");
            $(".accordion .acc-panel > a").removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });
    }
});
