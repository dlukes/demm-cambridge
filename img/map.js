

//      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdxsWnD3ldocE_-SPUhuuDGPfGmJCOuL8&callback=initMap"
  // type="text/javascript"></script>
 
    
var map;
var panorama;
var markery=new Object();
var instrukce=new Array();
var ikonky=new Array();
var obrazky=new Array();

var kruhy=new Array();
var popisky=new Array();

var barva="red";
var pruhlednost=0.5;

var mapOptions={center: new google.maps.LatLng(".$qe["mlat"].",".$qe["mlng"]."),
                       zoom: ".$qe["zoom"].",
                       streetViewControl:false,
					    zoomControl: true,
  mapTypeControl: true,
  scaleControl: false,
  rotateControl: false
                       };
 

                         

function initialize() {


  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
      
      google.maps.event.addDomListener(map, 'zoom_changed', function(){
 
   ukaz_markery(map.getZoom());
  });
  
    

  // Setup the markers on the map
   var rozmery={width:200,height:300};
  var miniz={width:50,height:70};


 ikonky[".$qe["zn"]."]={url:'$obr',scaledSize:miniz};
obrazky[".$qe["zn"]."]={url:'$obr',scaledSize:rozmery};
 
markery[".$qe["zn"]."]=new google.maps.Marker({ 
                        position: new google.maps.LatLng(".$qe["zlat"].",".$qe["zlng"]."),
                         map:map,
                         icon:ikonky[".$qe["zn"]."],
                         title: '".$qe["typ"]."',
                         visible:viditelnost(".$qe["viditelnost"].")
 
                 }); 
       markery[".$qe["zn"]."].cislo=".$qe["zn"]."; 
markery[".$qe["zn"]."].mapa=".$qe["mid"]."; 
markery[".$qe["zn"]."].mapid=".$qe["mid"]."; 	   
        markery[".$qe["zn"]."].spoust=".$qe["spoust"].";  
        markery[".$qe["zn"]."].nzv='".$qe["oznaceni"]."'; 
        markery[".$qe["zn"]."].stc='".$qe["staticky"]."';  
        markery[".$qe["zn"]."].skrt=function(){skrtnout(this);}; 
        markery[".$qe["zn"]."].viditelnost=".$qe["viditelnost"].";");
       
  echo("instrukce[".$qe["zn"]."]=new google.maps.InfoWindow({ 
                       content: '".$qe["instrukce"]."'
                      }); parent.console.log(markery[".$qe["zn"]."]);   
 
 
  $qe=pg_fetch_array($mm);
  $x++;
 }
 
 //kresleni tvaru
  $k=0;
  while(is_array($kr))
 {
     
 
 echo("var kam=new google.maps.LatLng(".$kr["zlat"].",".$kr["zlng"].");
 
 kruhy[$k]=new google.maps.Circle({ 
                        center: kam,
                         map:map,
                         radius: ".$kr["polomer"].",
                         fillColor:barva,
                         opacity:pruhlednost
 
                 }); 
             
                 
    ");
       
  echo("popisky[$k]=new google.maps.InfoWindow({ 
                       content: '".$kr["instrukce"]."',
                       position:kam
                      }); ");     
 
 
  $kr=pg_fetch_array($krh);
  $k++;
 }
 
  
  ?>
 

 for(i in markery)
 { 
 
 if(markery[i].spoust!=0 && inArray(markery[i].spoust,parent.hotove)==false)
 {
 markery[i].setMap(null);
 }

  if(inArray(markery[i].cislo,parent.hotove)==false || markery[i].stc=="t")
{
  aktivovat(markery[i]);
  if(parent.znacky[markery[i].cislo].klic=="t")
  {
  markery[i].setAnimation(google.maps.Animation.DROP);
  }
}
else
{
  markery[i].setMap(null);
}

 }
 
  for(i=0;i<kruhy.length;i++)
 { 
    
  aktivovat_kruhy(kruhy[i],i);

 }
 
 function aktivovat(marker)
 {

  
   google.maps.event.addDomListener(marker, 'rightclick', function(){ 

  console.log("activating: "+panorama.getVisible());
              
if(panorama.getVisible()==false)
{
 
 instrukce[marker.cislo].open(map,marker);	
} 
else
{
	 //instrukce[marker.cislo].open(panorama,marker);
    parent.upozorneni(instrukce[marker.cislo],10000);
}  

 
  });
  
 
  
   google.maps.event.addDomListener(marker, 'dblclick', function(){ 
   parent.akce(marker);
   
  }); 
   
  
 } 
 
 function aktivovat_kruhy(kruh,icko)
 {
   
   google.maps.event.addDomListener(kruh, 'click', function(){ 
   popisky[icko].open(map,kruh);
      panorama.setPosition(kruh.getCenter());
  });

  google.maps.event.addDomListener(kruh, 'dblclick', function(){ 
   toggleStreetView();
   
  });
  
 } 
 
 function skrtnout(zncka)
 {
 if(inArray(zncka.cislo,parent.hotove)==false)
    {
 parent.hotove.push(zncka.cislo);
 parent.nove_markery(zncka.cislo);
 autosave(zncka.cislo);
	}

 
 
 if(zncka.stc=="f")
 {
 zncka.setMap(null);
 }
 
 
 }
 
 
 function viditelnost(minz)
 {
 
  if(map.getZoom()>=minz)
  {
 
  return true;
  }
  else
  {
  return false;
  }
 
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
	velikosti(obrazky);
     ukaz_markery(22);
  } else {
    panorama.setVisible(false);
	velikosti(ikonky);
    ukaz_markery(map.getZoom());
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


function velikosti(zdroj)
{
for(i in markery)
{

markery[i].setIcon(zdroj[markery[i].cislo]);
} 
}


function ukaz_markery(z)
{
   
for(i in markery)
{
if(markery[i].viditelnost<=z)
 {
markery[i].setVisible(true);
//alert(markery[i].nzv);

}
else
markery[i].setVisible(false);
}

}

 
 function autosave(csl)
 {

	if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","php/ulozq.php?sv[]="+csl,true);
xmlhttp.send();

	
	
 }



    </script>
  </head>
  <body>
    <div id="panel" style="margin-left:-100px">
      <input type="button" value="Street View" onclick="toggleStreetView();"></input>
    </div>
    <div id="map-canvas"></div>
  </body>
</html>