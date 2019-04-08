$(function(){
    var $listItems=$('li');
    //$('li').on('click', function(e){ //1 
    $listItems.on('click', function(e){
        //$('li span').remove();
        $listItems.children('span').remove();
        var date=new Date();
        //alert(e.timeStamp);
        var strDate=date.setTime(e.timeStamp).toString();
        $(this).append('<span class="date">'+strDate+'</span>');
    });
});