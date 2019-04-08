/*var elements=document.getElementsByClassName('hot');
if(elements.length>2){
    var el=elements[2];
    el.className='cool';
} 
var elements=document.getElementsByTagName('li');
if(elements.length>0){
    var el=elements[0];
    el.className='cool';
}*/



/*var el=document.querySelector('li.hot');
el.className='cool';
var els=document.querySelectorAll('li.hot');
els[1].className='cool';*/



/*var hotItems=document.querySelectorAll('li.hot');
if(hotItems.length>0){
    for(var i=0; i<hotItems.length; i++){
        hotItems[i].className='cool';
    }
}*/


/*var startItem=document.getElementById('two');
var prevItem=startItem.previousSibling;
var nextItem=startItem.nextSibling;

prevItem.className='complete';
nextItem.className='cool';*/


/*var startItem=document.getElementsByTagName('ul')[0];
var firstItem=startItem.firstChild;
var lastItem=startItem.lastChild;

firstItem.setAttribute('class','complete');
lastItem.setAttribute('class', 'cool');*/

//---------accept to value of node: child, sibling ---------------------------
/*var mainItem=document.getElementById('one');
var elString=mainItem.firstChild.nextSibling.nodeValue; //read  text
alert("Fuck "+elString);
elString=elString.replace('figs', 'water');
mainItem.firstChild.nextSibling.nodeValue=elString; //set a value*/

//------ textContent and innerText---------------------------
/*var firstItem=document.getElementById('one');
var showTextContent=firstItem.textContent;
var showInnerText=firstItem.innerText;

var msg='<p>textContent: '+showTextContent+'</p>';
msg+='<p>innerText: '+showInnerText+'</p>';
var elScript=document.getElementById('scriptResult');
elScript.innerHTML=msg;
firstItem.textContent="wheat crackers";*/

//--------add html-markup to element (innerHTML)----------------
/*var firstItem=document.getElementById('one');
var htmlContent=firstItem.innerHTML;
firstItem.innerHTML='<a href=\"http://example.org\">'+htmlContent+'</a>'; // slash is't necesserily*/

//--------add/delete html-markup with DOM----------------------
//add element to DOM
/*var newEl=document.createElement('li');
var newText=document.createTextNode('granular cottage cheese');
newEl.appendChild(newText);

targetEl=document.getElementsByTagName('ul')[0];
targetEl.appendChild(newEl);

//delete element from DOM
var deleteEl=document.getElementsByTagName('li')[3];
var parent=deleteEl.parentNode;
parent.removeChild(deleteEl);*/


//------------working with attribute ----------------
/*var firstItem=document.getElementById('one');
if(firstItem.hasAttribute('class')){
    var attr=firstItem.getAttribute('class');
}
var el=document.getElementById('scriptResult');
var childEl=el.firstChild; // <p>
//childEl.textContent='The first element got class: '+attr;
el.innerHTML='<p> The first element got class: '+attr+'</p>';

var oneItem=document.getElementById('one');
oneItem.className='cool';
var fourthItem=document.getElementsByTagName('li')[3]; //or .item(3)
fourthItem.setAttribute('class', 'cool');

var oneItemDelete=oneItem; //was a silence then add 'var oneItemDelete=document.getElementById('one')'
if(oneItemDelete.hasAttribute('class')){
    oneItemDelete.removeAttribute('class');
}*/

//FINAL
var list=document.getElementsByTagName('ul').item(0);

//add new element to end of list
var newLastEl=document.createElement('li');
newLastEl.setAttribute('id', 'zero');
newLastEl.setAttribute('class', 'cool');
var newTextLastEl=document.createTextNode('disguise weakness');
newLastEl.appendChild(newTextLastEl);
list.appendChild(newLastEl);

//add new element to begin of list
var firstEl=list.firstChild;

var newBeginEl=document.createElement('li');
var newTextBeginEl=document.createTextNode('in just a few hours');
newBeginEl.appendChild(newTextBeginEl);
list.insertBefore(newBeginEl, firstEl);

//add new class to all attributes
var listItems=document.querySelectorAll('li');
for(var i=0; i<listItems.length; i++){
    listItems[i].className='cool';
}

//add count of items to head
var head=document.querySelector('h2');
var headText=head.firstChild.nodeValue;
var countLi=listItems.length;
//headText=headText.replace(..., ...) not good
var newText=headText+'<span>'+countLi+'</span>';
//head.textContent=newText;
head.innerHTML=newText;




