var elUserName=document.getElementById('username');
var elFeedback=document.getElementById('feedback');

function checkUserName(minLength){
    if(elUserName.value.length<minLength){
        elFeedback.innerHTML='User name must be 5 character or more!';
    } else {
        elFeedback.innerHTML='';
    }
}

if(elUserName.addEventListener){
    elUserName.addEventListener('blur', function(){
        checkUserName(5);
    }, false);
} else{
    elUserName.attachEvent('onblur', function(){
        checkUserName(5);
    });
}