var elUserName=document.getElementById('username');
var elFeedBack=document.getElementById('feedback');

function checkUserName(minLength){
    if(elUserName.value.length<minLength){
        elFeedBack.textContent='User name must be 5 character or more!';
    } else{
        elFeedBack.textContent='';
    }
}

elUserName.addEventListener('blur', function(){
    checkUserName(5);
}, false);
