var msg='<h2>browser window</h2><p>width:'+window.innerWidth+'</p>'
msg+='<p>height:'+window.innerHeight+'</p>'
msg+='<h2>history</h2><p>elements:'+window.history.length+'</p>'
msg+='<h2>screen</h2><p>width:'+window.screen.width+'</p>'
msg+='<p>height:'+window.screen.height+'</p>'
var el=document.getElementById('info')
el.innerHTML=msg
window.alert('Current page:'+window.location)

var el=document.getElementById('message');
var saying='Lenght of the string is: ';
saying+=saying.length;
saying+=' substring: '+saying.substring(0,6);
saying+=" index: "+saying.charAt(0);
saying=saying.concat(' code of char '+saying.charCodeAt(0));
el.innerText=saying;