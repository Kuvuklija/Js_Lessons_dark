var xhr=new XMLHttpRequest();
xhr.status=200;
xhr.onload=function(){
    var newContent='';
    if(xhr.status==200){
        var responseObject=JSON.parse(xhr.responseText); //remove no needed markup 
        for(var i=0; i<responseObject.events.length;i++){
            newContent+='<div class="event">';
            newContent+='<img src=\"'+responseObject.events[i].map+'\"';
            newContent+='alt="'+responseObject.events[i].location+'"/>';
            newContent+='<p><b>'+responseObject.events[i].location+'</b><br />'+
                                 responseObject.events[i].date+'</p>';
            newContent+='</div>';
        }
    }

    document.getElementById('content').innerHTML=newContent;
}

xhr.open('GET','data/data.json', true);
xhr.send(null);