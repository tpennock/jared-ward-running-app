'use strict';

angular.module('jwrApp.blocks').component('jwrVideo', {
    controllerAs: '$video',
    templateUrl: 'components/video/video.html',
    bindings: {
        src: '<videoSrc',
        img: '<bgImg'
    },
    controller: function JwrVideoCtrl($log) {
        var $video = this;

        $video.getBgImg = function() {
            return {
                'background-image': 'url(' + $video.img + ')'
            };
        };

    }
});
