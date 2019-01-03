var msg='<p><b>Page title:</b>'+document.title+'<br/>';
msg+='<b>Page adress:</b>'+document.URL+'<br/>';
msg+='<b>Change data:</b>'+document.lastModified+'</p>';
var el=document.getElementById('footer');
el.innerHTML=msg;