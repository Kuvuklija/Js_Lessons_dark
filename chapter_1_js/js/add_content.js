var today=new Date();
var hourNow=today.getHours();
var greeting;

if(hourNow>18)
	greeting='Good evening Vadim';
else if(hourNow>14)
	greeting='Good afternoon Vadim';
else 
	greeting='Good morning Vadim';

document.write('<h3>'+greeting+'</h3>');