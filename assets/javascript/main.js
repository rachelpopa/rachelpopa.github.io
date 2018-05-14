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

    bioTransformation();

});