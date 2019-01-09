var pass=50;
var score=90;

var hasPassed=score>=pass;

var el=document.getElementById('answer');
el.innerHTML='<p>Passing level: '+hasPassed+'</p>';