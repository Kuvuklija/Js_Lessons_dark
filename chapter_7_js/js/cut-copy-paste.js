$(function(){
    var $p=$('p');
    var $h2=$('h2');
    var $cloneP=$p.clone();
    $p.remove();
    $h2.after($cloneP);

    var $moveItem=$('[id=one]').detach(); //delete, but saved in variable
    //alert($moveItem.text());
    //$('ul').append($moveItem); //don't work
    $('li:last').after($moveItem);
});