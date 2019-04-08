$(function(){
    var $button=$('#newItemButton');
    var $form=$('#newItemForm');
    var $textInput=$('input:text');

    $button.show();
    $form.hide();

    $('#showForm').on('click', function(){
        $button.hide();
        $form.show();
    });

    $form.on('submit', function(e){
        e.preventDefault();
        var newText=$('input:text').val();
        var $newElem=$('<li>'+newText+'</li>');
        $('li:last').after($newElem);
        $form.hide();
        $button.show();
    });
});