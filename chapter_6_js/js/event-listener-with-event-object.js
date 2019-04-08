var elUserName=document.getElementById('username');

//var feedback=document.getElementById('feedback'); gets from target in function body
if(elUserName.addEventListener){
       elUserName.addEventListener('blur', function(e){
        checkLength(e,5);
   }, false); 
} else{
        elUserName.attachEvent('onblur', function(e){ //for IE <8
        checkLength(e, 5);
    });
}

var elLink=document.getElementById('test');
elLink.addEventListener('click', testLink, false);

function checkLength(e,minLength){
    if(!e){
        e=window.event;
    }
    var elTarget=e.target || e.srcElement;
    var elMsgFeedback=elTarget.nextSibling;
    if(elTarget.value.length<minLength){
        alert('fuck');
        elMsgFeedback.textContent="User name must be 5 character or more!";
    } else{
        elMsgFeedback.textContent="";
    }
}

function testLink(){
    alert("Test link!");
}
