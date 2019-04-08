var noteName=document.getElementById('noteName');
var noteInput=document.getElementById('noteInput');
//var buttonForm=document.getElementById('buttons');

if(document.addEventListener){
    noteInput.addEventListener('input', writeLabel, false);
    document.addEventListener('click', recorderControl, false); //parent node for listening
} else{
    noteInput.attachEvent('onkeyup', writeLabel, false);
    document.attachEvent('onclick', recorderControl, false);
}

function writeLabel(e){
    if(!e){
        e=window.event;
    }
    var target=e.target || e.srcElement;
    var textEntered=target.value;
    noteName.textContent=textEntered;
}

function recorderControl(e){
    if(!e){
        e=window.event;
    }
    var target=e.target || e.srcElement;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue=false;
    }

    switch(target.getAttribute('data-state')){
        case 'record':
          target.setAttribute('data-state', 'stop');
          break;
        case 'stop':
          target.setAttribute('data-state', 'record');
          break;
    }
}