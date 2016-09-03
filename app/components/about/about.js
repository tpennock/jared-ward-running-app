'use strict';

angular.module('jwrApp.blocks').component('jwrAbout', {
    controllerAs: '$about',
    templateUrl: 'components/about/about.html',
    bindings: {},
    controller: function JwrAboutCtrl($log, $interval) {
        var $about = this;

        $about.times = [
            {
                type: 'Marathon',
                time: '02:11:30',
                displayTime: '2:11:30',
                best: '02:02:57'
            },
            {
                type: '10K',
                time: '00:28:36',
                displayTime: '28:36',
                best: '00:26:17'
            },
            {
                type: '5K',
                time: '00:13:34',
                displayTime: '13:34',
                best: '00:12:37'
            },
            {
                type: '3K',
                time: '00:07:52',
                displayTime: '7:52',
                best: '00:07:20'
            },
            {
                type: 'Mile',
                time: '00:04:03',
                displayTime: '4:03',
                best: '00:03:43'
            }
        ];

        var getSeconds = function (time) {
            var times = time.split(":"),
                hours = times[0],
                minutes = times[1],
                seconds = times[2];

            seconds = parseInt(seconds, 10) + (parseInt(minutes, 10) * 60) + (parseInt(hours, 10) * 3600);
            return seconds;
        };

        $about.getTimePercent = function (time, bestTime) {
            var timeSec = getSeconds(time);
            var bestSec = getSeconds(bestTime);
            $log.info(timeSec, bestSec, Math.round((bestSec / timeSec) * 100));
            return Math.round((bestSec / timeSec) * 100);
        };

        $interval(function() {
            var $section = $('#animated-skills').appear(function() {
                function loadDaBars() {
                    var bar = $('.progress-bar');
                    var bar_width = $(this);
                    $(function(){
                      $(bar).each(function(){
                        bar_width = $(this).attr('aria-valuenow');
                          $log.info(bar_width);
                        $(this).width(bar_width + '%');
                      });
                    });
                }
                loadDaBars();
            });
        }, 0, 1);
    }
});
