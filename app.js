// selectionner notre document en lui 
// envoyant la méthode jquery et une fonction
// $(document).ready(function(){
//     // $('#hello').html('Hello World')
//     // passer le texte en hover
//     var hello = $('#hello');
//     hello.hover(function(){
//         $('#hello').css({
//             'color' : 'red'
//         });
//     })
// });
$(function(){
    // var btn = $('.btn');
    // var paragraphe = $('p');
    // btn.click(function(){
    //     // fonction de callback
    //     // paragraphe.hide("slow", function(){
    //     //     alert('le paragraphe est caché !');
    //     // });

    //     // cacher le paragraphe de manière lente
    //     paragraphe.hide();
    //     alert("hello");
    // });

    // fonction de chainage
    var paragraphe = $('p');
    paragraphe.css({'color' : '#000000'}).css({'background-color' : 'red'});
});
