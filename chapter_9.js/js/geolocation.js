// В браузере Chrome в автономном режиме данный пример не работает (но функционирует на веб-сервере).
// В других браузерах может появиться запрос о получении разрешения на определение местоположения.
// Процесс определения местоположения занимает некоторое время.

var elMap=document.getElementById('loc');
var msgError='Sorry, we were unable to get your location';

if(Modernizr.geolocation){
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent='Get position...';
}else{
  elMap.textContent=msgError;
}

function success(position){
  msgLoc='<h3>Longitude:<br>';
  msgLoc+=position.coords.longitude+'</h3>';
  msgLoc+='<h3>Latitude:<br>';
  msgLoc+=position.coords.latitude+'</h3>';
  elMap.innerHTML=msgLoc;
}

function fail(msg){
  elMap.textContent=msg;
  console.log(msg.code+' '+msg.message+ ': see page 424 in the book');
}