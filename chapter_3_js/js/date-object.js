var today=new Date();
var year=today.getFullYear();
var el=document.getElementById('footer');
el.innerHTML='<p>Own &copy;'+year+'</p><span>'+today.toTimeString()+'</span>';

var est=new Date('Jan 05, 2019 15:46:30');
var difference=(today.getTime()-est.getTime())/31556900000; //ms in the year
var elMsg=document.getElementById('message');
elMsg.textContent=Math.floor(difference)+' years we are giving you air flight services '+
                  est.toDateString();
