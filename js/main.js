$(function () {
    $("html").niceScroll();
    'use strict';
    $(window).scroll(function () {
        // window.console.log($('.navbar').height());
        // window.console.log($(window).scrollTop());

        var navbar = $('.navbar');

        if($(window).scrollTop()>= $(window).height()){
            if(!navbar.hasClass('scrolled'))
            navbar.addClass('scrolled');
        }
        else{
            navbar.removeClass('scrolled');
        }
    });

    //deal with tabs
    $(".tab-switch li").click(function () {
        //add selected to selected div
        $(this).addClass('selected').siblings().removeClass('selected');

        //hide all divs
        $('.tabs-section .tabs-content > div').hide();

        //show dwlwcted div
        $($(this).data('class')).show();

    });


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});


