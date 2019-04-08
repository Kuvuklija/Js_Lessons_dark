function checkUserName(){
    var tagFeedBack=document.getElementById('feedback');
    var textInputed=document.getElementById('username').value;
    //alert(textInputed);
    if(textInputed.length<5){
        tagFeedBack.textContent="User name must be 5 characters ore more!"
    }else{
        tagFeedBack.textContent="";
    }
    
}