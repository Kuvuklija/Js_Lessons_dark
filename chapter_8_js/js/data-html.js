var request=new XMLHttpRequest();
request.status=200; //fake answer from server
//async response
request.onload=function(){
    if(request.status==200){
        document.getElementById('content').innerHTML=request.responseText;
    }
};
request.open('GET','data/data.html',true);
request.send(null);
