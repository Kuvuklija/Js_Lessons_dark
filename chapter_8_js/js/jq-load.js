$('nav a').on('click', function(e){
    e.preventDefault();
    var currentUrl=this.href;
    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();  
    //ajax
    $('#content').load(currentUrl+' #content').hide().fadeIn('slow');
});