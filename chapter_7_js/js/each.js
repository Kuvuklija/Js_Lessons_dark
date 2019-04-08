$(function(){
    $('li').each(function(){
        var ids=this.id;
        $(this).prepend('<span class="order"><b>'+ids+'</b></span> ');
    })
});