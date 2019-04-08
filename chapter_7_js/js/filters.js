var $listItems=$('li');
$listItems.filter('.hot:last').removeClass('hot');
//$('li:not(.hot)').addClass('cool');                 //1 var -- with object
$listItems.filter(':not(.hot)').addClass('cool');     //2 var -- with variable
$listItems.has('em').addClass('complete');

$listItems.each(function(){
    var $this=$(this); //current element
    if($this.is('.hot')){
        $this.prepend('Stock! ');
    }
});

$('li:contains("honey")').append(' (home)');