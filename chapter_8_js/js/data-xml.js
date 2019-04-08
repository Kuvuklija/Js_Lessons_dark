var xhr = new XMLHttpRequest();
xhr.status = 200;
xhr.onload = function () {
    if (xhr.status == 200) {
        var response=xhr.responseXML;
        var events=response.getElementsByTagName('event');
        for(var i=0;i<events.length; i++){
            //create <div>
            var httpContainer=document.createElement('div');
            httpContainer.className='event';
            //create <img>
            var image=document.createElement('img');
            image.setAttribute('src', getNodeValue(events[i],'map'));
            image.appendChild(document.createTextNode(getNodeValue(events[i],'map')));
            httpContainer.appendChild(image);
            //create <p>,<b>
            var location=document.createElement('p');
            var city=document.createElement('b');
            var newline=document.createElement('br');
            city.appendChild(document.createTextNode(getNodeValue(events[i],'location')));
            location.appendChild(newline);
            location.insertBefore(city, newline);
            location.appendChild(document.createTextNode(getNodeValue(events[i],'date')));
            httpContainer.appendChild(location);
            
            document.getElementById('content').appendChild(httpContainer);
        } 
        
        function getNodeValue(obj,tag){
            //return obj.getElementsByTagName(tag)[0].firstChild.nodeValue; //working variant, but longer
            return obj.getElementsByTagName(tag)[0].textContent;
        }
    }
};
xhr.open('GET','data/data.xml');
xhr.send(null);