$(function(){
    
    var $newItemForm=$('#newItemForm');
    $newItemForm.hide();

    var $newItemButton=$('#newItemButton');
    $newItemButton.show();

    //drop-down list
    $('li').hide().each(function(index){
        $(this).delay(index*450).fadeIn(1600);
    });

    //count elements
    function updateCount(){
        var $itemsCount=$('li[class!=complete]').length;
        $('#counter').text($itemsCount);
    }
    updateCount();

    //before add new element
    var $showForm=$('#showForm');
    $showForm.on('click', function(){
        $newItemForm.show();
        $newItemButton.hide();
    });

    //adding new element
    var $list=$('ul')

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        $inputText=$('input:text');
        var text=$inputText.val();
        if(text==''){
            alert('Please input data!');
            return;
        }
        $list.append('<li>'+text+'</li>');
        $inputText.val('');
        updateCount();
    });

    //click for ended remove
    $list.on('click','li',function(){
        var $this=$(this);
        var completeBool=$this.hasClass('complete');
        if(completeBool==true){
            $this.animate({
                opasity:0.0,
                paddingLeft:"+180"
            },500, 'swing', function(){
                $this.remove();
            });
        } else{
            var item=$this.text();
            $this.remove();
            $list.append('<li class=\"complete\">'+item+'</li>')
                 .hide().fadeIn(300);
            updateCount();
        }
    });






});