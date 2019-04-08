//good example
//drop-down menu
$(function(){
    $('h2').hide().slideDown();
    var $li=$('li');
    $li.hide().each(function(i){
        $(this).delay(700*i).fadeIn(700);
    });
    $li.on('click', function(){
        $(this).fadeOut(700);
    });
});