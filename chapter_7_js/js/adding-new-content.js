$(function(){
    $('ul').before('<p class="notice">List has updated!</p>');
    $('li.hot').prepend('+');
    var $newListItem=$('<li><em>Corn</em> without GMO</li>');
    $('li:last').after($newListItem);
});