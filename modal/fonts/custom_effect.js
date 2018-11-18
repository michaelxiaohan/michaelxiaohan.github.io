(function($) {
    "use strict";
    var isOn = 0,
    sets, fx, toAnimate = "#effect1",
    settings = {
        animation: 8,
        animationType: "in",
        backwards: false,
        easing: "easeOutQuint",
        speed: 1000,
        sequenceDelay: 100,
        startDelay: 1000,
        offsetX: 100,
        offsetY: 50,
        onComplete: doThis,
        restoreHTML: true
    };
    jQuery(document).ready(function() {
        fx = jQuery("#effect1");
        jQuery.cjTextFx(settings);
        jQuery.cjTextFx.animate(toAnimate);
    });
    function doThis() {
        fx = jQuery("#effect1");
        var animateObj = '#effect1';
        if (isOn === 13) {
            fx.html('欢迎进店选购');
            sets = {
                animation: 1,
                animationType: "in",
                restoreHTML: false,
                onComplete: false
            };
        } else { (isOn < 10) ? isOn++:isOn = 0;
            switch (isOn) {
            case 1:
                sets = {
                    animation: 2,
                    animationType: "in",
                    easing: "easeInQuint",
                    restoreHTML: false,
                };
                break;
            case 2:
                sets = {
                    animation: 11,
                    animationType: "out",
                    restoreHTML: false
                };
                break;
            case 3:
                fx.html("买两件送一件");
                sets = {
                    animation: 11,
                    animationType: "in",
                    restoreHTML: false
                };
                break;
            case 4:
                sets = {
                    animation: 5,
                    animationType: "out",
                    restoreHTML: false
                };
                break;
            case 5:
                fx.html("全场满200减少50");
                sets = {
                    animation: 1
                };
                break;
            case 6:
                sets = {
                    animation: 1,
                    animationType: "out",
                    restoreHTML: false
                };
                break;
            case 7:
                fx.html("购买即送会员卡");
                sets = {
                    animation: 6,
                    backwards: true
                };
                break;
            case 8:
                sets = {
                    animation: 4,
                    animationType: "out",
                    backwards: true,
                    restoreHTML: false
                };
                break;
            case 9:
                fx.html("积分可兑换");
                sets = {
                    animation: 2,
                    easing: "easeOutBounce"
                };
                break;
            // case 10:
            //     sets = {
            //         animation: 2,
            //         animationType: "out",
            //         speed: 500,
            //         easing: "easeInBack",
            //         restoreHTML: false
            //     };
            //     break;
            // case 11:
            //     fx.html("如果喜欢此插件，敬请下载吧");
            //     sets = {
            //         animation: 14,
            //         startDelay: 1000,
            //         easing: "easeInBack",
            //         restoreHTML: false
            //     };
            //     break;
            // case 12:
            //     sets = {
            //         animation: 6,
            //         animationType: "out",
            //         speed: 500,
            //         easing: "easeInBack",
            //         restoreHTML: false
            //     };
            //     break;
            default:
                isOn = 10;
                break;
            }
        }
        jQuery.cjTextFx.animate(animateObj, sets);
    }
})(jQuery);
