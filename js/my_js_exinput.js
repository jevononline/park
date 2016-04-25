// to top
$(function(){  
    var $backToTopEle = $('.to-top'), $backToTopFun = function() {  
        var st = $(document).scrollTop(), winh = $(window).height();  
        (st > 200) ? $backToTopEle.fadeIn('slow') : $backToTopEle.fadeOut('slow');  
        if (!window.XMLHttpRequest) {  
            $backToTopEle.css("top", st + winh - 166);  
        }  
    };  
    $('.to-top').click(function() {  
        $("html, body").animate({ scrollTop: 0 }, 1200);  
    })  
    $backToTopEle.hide();  
    $backToTopFun();  
    $(window).bind("scroll", $backToTopFun);  
    $('#catalogWord').click(function(){  
        $("#catalog").slideToggle(600);  
    })  
}) 

//根据导航栏折叠与否使用不同样式表
var oL=document.getElementById("l1");
var timer=null;

clearInterval(timer);
timer=setInterval(function () { // 运动定时器触发函数运行
    if(document.documentElement.clientWidth<748) {
        //alert(document.documentElement.clientWidth);
        oL.href="css/my_style_clpsd.css";
    }
    else {
        oL.href="css/my_style_exinput.css";
    };
},30); // 小于30，比如1，10会有问题

