window.addEventListener('DOMContentLoaded', setup, false);

function setup(){
    var textInput=document.getElementById('message');
    textInput.focus();
}

window.addEventListener('beforeunload', function(event){
    var message='You have inputed data which will not save!';
    (event|| window.event).returnValue=message;
    return message;
})