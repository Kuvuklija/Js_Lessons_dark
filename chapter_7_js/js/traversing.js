$(function(){
    $('ul').hide();
    var $h2=$('h2');
    $h2.append('<a class="show"><i>show</i></a>');

    $h2.on('click', function(){
        $h2.next().fadeIn(500).children('.hot').addClass('complete');
        $h2.find('.show').fadeOut();
    });
});