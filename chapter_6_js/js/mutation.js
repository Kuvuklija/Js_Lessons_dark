var elAddToListLink=document.querySelector('a');
elAddToListLink.addEventListener('click',addNewElementToList, false);

var elList=document.getElementById('list');
elList.addEventListener('DOMNodeInserted', insertDOM, false);

var elCounter=document.getElementById('counter');

function addNewElementToList(e){
    e.preventDefault();
    var newElemLI=document.createElement('li');
    var newText=document.createTextNode('New list item');
    newElemLI.appendChild(newText);
    elList.appendChild(newElemLI); //with 'innerHTML' more quckly
}

function insertDOM(){
    var totalElements=document.getElementsByTagName('li');
    elCounter.textContent=totalElements.length;
}