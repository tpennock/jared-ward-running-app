'use strict';

angular.module('jwrApp.blocks').component('jwrBanner', {
    controllerAs: '$banner',
    templateUrl: 'components/banner/banner.html',
    bindings: {},
    controller: function JwrBannerCtrl($rootScope, $log, $state, $interval) {
        var $banner = this;

        $banner.bgImg = 'img/jwrc/bg/b1.jpg';

        $banner.bgImgStyle = function() {
            return {
                'background-image': 'url(' + $banner.bgImg + ')'
            };
        };

        $banner.setBgImg = function() {
            var img = 'img/jwrc/bg/';

            switch ($state.current.name) {
                case 'coaching':
                    img += 'b1.jpg'; //b1-coaching.jpg
                    break;
                case 'bio':
                    img += 'b1-bio.jpg';
                    break;
                case 'apparel':
                    img += 'b1-alt-2.jpg';
                    break;
                case 'home':
                    img += 'b1-home.jpg';
                    break;
                default:
                    img += 'b1.jpg';
            }

            $banner.bgImg = img;
        };

        $rootScope.$watch(function() { return $state.current.name; }, function(newValue, oldValue) {
            if (newValue !== oldValue) {
                $('#banner').stop().animate({opacity: 0}, 0, function() {
                    $banner.setBgImg();
                    var image = new Image();
                    image.onload = function () {
                        $interval(function() {
                            $('#banner').animate({opacity: 1}, 1000);
                        }, 0, 1);
                    }
                    image.src = $banner.bgImg;
                });
            }
        });
    }
});
