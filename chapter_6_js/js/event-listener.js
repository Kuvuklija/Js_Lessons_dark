var checkUserName=function(){
    var feedBackMsg=document.getElementById('feedback');
    if(this.value.length<5){
        feedBackMsg.textContent="User name have to be 5 character or more!";
    } else {
        feedBackMsg.textContent='';
    }
}

var inputValue=document.getElementById('username');
inputValue.addEventListener('blur',checkUserName,false);