var elList=document.getElementById('shoppingList');
if(elList.addEventListener){
    elList.addEventListener('click', deleteTaget, false);
} else {
    elList.attachEvent('onclick', deleteTaget);
}

function deleteTaget(e){
    var target=getTarget(e);
    var elParent=target.parentNode; //<li>
    var elGrandParent=elParent.parentNode; //<ul>

    elGrandParent.removeChild(elParent);
    
    if(e.preventDefault){
        e.preventDefault();
    } else {
        e.returnValue=false;
    }
}

//define pushed link
function getTarget(e){ 
    if(!e){
        e=window.e;
    }
    return target=e.target || e.srcElement; //<a>
}

