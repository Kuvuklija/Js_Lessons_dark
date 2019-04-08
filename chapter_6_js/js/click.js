var msg='<div class=\"header\"><a id=\"close\" href=#>закрыть Х</a></div>';
msg+='<div><h2>Technical service</h2>';
msg+='Since 12 per 13 hours will be maintanance on the servers.';
msg+='During this may be take place less faulure in sites working.</div>';

var elNew=document.createElement('div');
elNew.setAttribute('id','note');
elNew.innerHTML=msg;
document.body.appendChild(elNew);

var elTarget=document.getElementById('close');
elTarget.addEventListener('click', CloseNote, false );

function CloseNote(){
    document.body.removeChild(elNew);
}