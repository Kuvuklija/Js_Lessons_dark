var scores=[24,32,17];
var arrayLenght=scores.length;
var roundNumber=0;
var msg='';
for(roundNumber; roundNumber<arrayLenght; roundNumber++){
    msg+='Round '+(roundNumber+1)+': '+scores[roundNumber]+'<br/>';
}
document.getElementById('answer').innerHTML=msg;