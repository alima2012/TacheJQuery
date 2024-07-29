// 

$(document).ready(function(){
//    declaration des variables
    var dark = $(".hov");
    var imgs = $("img");
    var content = $('.content');

    // cacher le hover

    dark.hide();

    // montrer dark au survol
    imgs.mouseenter(function(){
        $(this).next().fadeIn('slow');
        content.addClass('content_hover');
    });

    dark.mouseleave(function(){
        $(this).fadeOut('slow');
        content.removeClass('content_hover');
    });
});



