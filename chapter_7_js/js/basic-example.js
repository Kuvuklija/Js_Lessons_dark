$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(2500);
$('li').on('click',function(){
    $(this).remove();
})