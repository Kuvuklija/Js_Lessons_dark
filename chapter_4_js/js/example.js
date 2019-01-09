var table=prompt("Ready! (enter a number 1-3):");
if(table<1 || table>3){
    alert('Please enter a valid number!');
}
    
var operation='add';

typeOperation=operation=='add'? '+': 'x';

function operationExecute(table){
    var msg='';
    var i=1;
    while(i<11){
        result=typeOperation=='+' ? i+Number(table): (i*table);
        msg+=i+typeOperation+table+'='+result+'<br/>';
        i++;
    }
    return msg;
}
document.getElementById('blackboard').innerHTML=operationExecute(table);