$(function(){
    $('li:contains("свежий")').text('almond');
    $('li.hot').html(function(){
        return '<em>'+$(this).text()+'</em>';
    });
    $('li#one').remove();
});