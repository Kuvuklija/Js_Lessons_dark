function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailibility=function(){
        return this.rooms-this.booked;
    }
}

var quayHotel=new Hotel('Tyla',40,25);
var parkHotel=new Hotel('Beach',120,77);

var details1=quayHotel.name+', free rooms are: ';
details1+=quayHotel.checkAvailibility();
var elHotel1=document.getElementById('hotel1');
elHotel1.textContent=details1;

var details2=parkHotel.name+', free rooms are: '+parkHotel.checkAvailibility();
var elHotel2=document.getElementById('hotel2');
elHotel2.textContent=details2;