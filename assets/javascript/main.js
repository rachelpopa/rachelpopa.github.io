$(document).ready(function () {

    var currWidth = null;

    function isMobileWidth() {
        return $('#mobile-indicator').is(':visible');
    }

    function widthChanged(){
        if(!currWidth || currWidth != $(window).width()){
            currWidth = $(window).width();
            return true;
        } else {
            return false;
        }
    }

    $(".bio-avatar, .bio-title-box").click(function () {
        if (isMobileWidth()) {
            $(".bio-content").css("display", "none");
            $(".bio-content").css("width", "55%");
            $(".bio-content").removeClass("selected");
            $('html, body').animate({
                scrollTop: ($(this).offset().top)
            },300);
            $(this).siblings(".bio-content").css("display", "inline");
            $(this).siblings(".bio-content").css("width", "100%");
            $(this).siblings(".bio-content").addClass("selected");
        }
    });

    var bioTransformation = function() {
         //On mobile
         if (isMobileWidth() && widthChanged()) {       
            $(".bio-content").css("display", "none");
            $(".bio-content").css("width", "100%");
            closeNav();
        }
        //On laptop 
        else if(!isMobileWidth()) {            
            $(".bio-content").css("display", "inline");
            $(".bio-content").css("width", "55%");
        }
    }

    $( window ).resize(function() {
        bioTransformation();
    });


    $("#hamburger").click(function(){
        if($("#hamburger").hasClass("is-active")){
            closeNav();
        } else{
            openNav();
        }
    });

    $(window).scroll(function() {
        closeNav();
    });

    var openNav = function() {    
        if(!$("#hamburger").hasClass("is-active")) {
            $("#hamburger").addClass("is-active");
            $(".trigger").css("display", "block");      
        }                    
    }

    var closeNav = function() {
        if($("#hamburger").hasClass("is-active")) {
            $("#hamburger").removeClass("is-active");
            $(".trigger").css("display", "none");   
        }     
    }

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
            clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    bioTransformation();

    var deadline = new Date("February 13, 2018 00:00:00");
    initializeClock('countdown', deadline);

});