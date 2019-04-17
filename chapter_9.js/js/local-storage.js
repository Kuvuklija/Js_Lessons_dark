if(window.localStorage){

  var elUserName=document.getElementById('username');
  var elAnswer=document.getElementById('answer');

  elUserName.value=localStorage.getItem('username');
  elAnswer.value=localSrorage.getItem('answer');

  elUserName.addEventListener('input', function(){
      localStorage.setItem('username', elUserName.value);
  });

  elAnswer.addEventListener('input', function(){
      localStorage.setItem('answer', elAnswer.value);
  });
}
