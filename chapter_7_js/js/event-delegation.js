//good example
$(function(){
    $('ul').on('click mouseover',
    ':not(#four)',
    {statusCustom: 'important'},
    function(e){
        var listItems='Element: '+e.target.textContent+'<br/>';
        var itemStatus='State: '+e.data.statusCustom+'<br/>';
        var eventType='Event: '+e.type;
        $('#notes').html(function(){
            return (listItems+itemStatus+eventType);                  //1 version
        })
        //$('#notes').html(listItems+itemStatus+eventType);  //2 version
    })
});