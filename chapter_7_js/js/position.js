$(function(){
    var $window=$(window);
    var $slide=$('#slideAd');
    var endZone=$('#footer').offset().top-$window.height()-1000;

    $window.on('scroll', function(){
        
        if((endZone)<$window.scrollTop()){
            $slide.animate({'right':'0px'},250);
        }else{
            $slide.stop(true).animate({'right':'-360px'},250);
        }
    });
});