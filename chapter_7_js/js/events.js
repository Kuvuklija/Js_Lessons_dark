$(function(){
    var $listItems=$('li');

    $listItems.on('mouseover', function(){
        var ids=this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority"> '+ids+'</span>')
    });

    $listItems.on('mouseout', function(){
        $(this).children('span').remove();
    });
});