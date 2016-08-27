'use strict';

angular.module('jwrApp.blocks').component('jwrAbout', {
    controllerAs: '$about',
    templateUrl: 'components/about/about.html',
    bindings: {},
    controller: function JwrAboutCtrl($log) {
        var $about = this;

        var $section = $('#animated-skills').appear(function() {

            function loadDaBars() {
                var bar = $('.progress-bar');
                var bar_width = $(this);
                $(function(){
                  $(bar).each(function(){
                    bar_width = $(this).attr('aria-valuenow');
                    $(this).width(bar_width + '%');
                  });
                });
            }
            loadDaBars();
        });
    }
});
