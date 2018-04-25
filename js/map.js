 
var map;
var panorama;
var markers=new Object();
var des=new Object();
var ikonky=new Array();
var obrazky=new Array();

var kruhy=new Array();
var popisky=new Array();

var barva="red";
var pruhlednost=0.5;


 

function unlockMarker(mid)
{
   markers[mid].setVisible(true);  
    $("#log").append("<li>You have discovered a new place. Check out the map!");
}




                         

function initMap() {

  console.log("initializing map");  
var mapOptions={center: new google.maps.LatLng(55.6691551,-1.8008945,15),
                       zoom: 12,
                       streetViewControl:false,
					    zoomControl: true,
  mapTypeControl: true,
  scaleControl: false,
  rotateControl: false
                       };

  map = new google.maps.Map(document.getElementById('mapCanvas'),
      mapOptions);
      
setMarkers();
  
}


function setMarkers()
{
  markers["m1"]=new google.maps.Marker({ 
                        position: new google.maps.LatLng(55.6691551,-1.8008945,15),
                         map:map,
                        // icon:ikonky[".$qe["zn"]."],
                         title: 'marker',
      visible:false
                        
});
    
    markers["m1"].locked=false;
    markers["m1"].id="m1";
    
des["m1"]=new google.maps.InfoWindow({ 
                       content: 'description'
                      }); 
 

 
var kam=new google.maps.LatLng(0,0);
 


 for(i in markers)
 { 
 console.log("activation loop");
     
 if(markers[i].locked!=true)
 {
      console.log("calling fuctnio");
 //markers[i].setMap(map);
     aktivovat(markers[i]);
 }


 }
  
}

    
 
 function aktivovat(marker)
 {
 console.log("activating: ");
  
   google.maps.event.addDomListener(marker, 'click', function(){ 

 des[marker.id].open(map,marker);	

 
  });
  
  
 } 
 




  function inArray(needle,haystack)
{
    var count=haystack.length;
    for(var i=0;i<count;i++)
    {
        if(haystack[i]===needle){return true;}
    }
    return false;
}

function setSview()
{
    // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView();
  panorama.setPosition(map.getCenter());
  panorama.setPov(/** @type {google.maps.StreetViewPov} */({
    heading: 265,
    pitch: 0
  }));
  
   
 google.maps.event.addDomListener(map, 'click', function(e){
   panorama.setPosition(e.latLng);
  });  
   
}

  


function toggleStreetView() {
  var toggle = panorama.getVisible();
  if (toggle == false) {
    panorama.setVisible(true);
	
  } else {
    panorama.setVisible(false);
	
  }
}


