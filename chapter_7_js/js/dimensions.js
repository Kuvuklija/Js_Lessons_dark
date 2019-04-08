$(function(){
    var listHeight=$('#page').height();
    $('ul').prepend('<p> Height: '+listHeight+'px</p>');
    $('li:not(#three)').width('60%');
    $('li#one').width(200);
    $('li#two').width('75%');
});