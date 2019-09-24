$(document).ready(function () {
    // navbar toggle
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    });


    // sticky navbar
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position >= 900){
            $('.navbar').addClass('navbar-background');
        }else{
            $('.navbar').removeClass('navbar-background'); 
        }



    });


    // Smooth Scroll
    $('.nav-item a,.header-link').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop:$(target).offset().top - 25
        },3000);
    });













    $('#header, .info').ripples({
        dropRadius: 20,
        perturbance: 0.0005,

    });

    // Magnific script
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        }
        // other options
    });
});