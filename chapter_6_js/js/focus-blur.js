var elUserName=document.getElementById('username');
var elFeedBack=document.getElementById('feedback');

elUserName.addEventListener('focus', tipUserName, false);
elUserName.addEventListener('blur', function(){checkUserName(5);}, false);

function tipUserName(){
    elFeedBack.className='tip';
    elFeedBack.innerHTML='User name must have 5 characters or more!';
}

function checkUserName(minLength){
    if(elUserName.value.length<minLength){
        elFeedBack.className='warning';
        elFeedBack.textContent="The user name too concise!";
    } else{
        elFeedBack.textContent="";
    }
}

