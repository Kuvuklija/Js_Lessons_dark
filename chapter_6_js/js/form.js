var elSelect=document.getElementById('package');
var elForm=document.getElementById('formSignup'); //form

var elTerms=document.getElementById('terms');
var elSelectedFeedback=document.getElementById('packageHint');
var elTermsFeedback=document.getElementById('termsHint');

elSelect.addEventListener('change', inspectSelected, false );
elForm.addEventListener('submit', inspectCheckBox, false);


function inspectSelected(){
    var selectedItem=this.options[this.selectedIndex].value;
    if(selectedItem=='monthly'){
        elSelectedFeedback.textContent="Save 100$ having bougth subscription for year!"
    } else{
        elSelectedFeedback.textContent="Excellent choice!"
    }
}

function inspectCheckBox(event){
    if(!elTerms.checked){
        elTermsFeedback.innerHTML='You have to agree with terms of convention!';
        event.preventDefault(); //stop submitting form to server
    }
}