var sx=document.getElementById('sx');
var sy=document.getElementById('sy');
var px=document.getElementById('px');
var py=document.getElementById('py');
var cx=document.getElementById('cx');
var cy=document.getElementById('cy');

var el=document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);

function showPosition(event){
    sx.value=event.screenX;
    sy.value=event.screenY;
    px.value=event.pageX;
    py.value=event.pageY;
    cx.value=event.clientX;
    cy.value=event.clientY;
}