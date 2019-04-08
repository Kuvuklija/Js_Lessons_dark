var elMessage=document.getElementById('message');
elMessage.addEventListener('keypress', function(e){
    charCounter(e, elMessage);
}, false);

function charCounter(e, elMessage){
    textEntered=elMessage.value;
    var charDisplay=document.getElementById('charactersLeft');
    charDisplay.textContent=180-textEntered.length;

    var lastKey=document.getElementById('lastKey');
    lastKey.textContent='ASCII-code last pressed key '+e.keyCode;
}