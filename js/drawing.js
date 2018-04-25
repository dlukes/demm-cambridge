

//initialize canvas            
  loadImg(img); 
        
  var c=document.getElementById("msCanvas");
  var ctx=c.getContext("2d");

nextSlide(slides[0]);

//FUNCTIONS

//initialization
function loadImg(img)
 {
    $("#msCanvas").css({"background-image":"url('img/"+img.url+"')"}); 
    $("#msCanvas").attr({"width":img.size[0]+"px","height":img.size[1]+"px"}); 
 }

// displaying zones
function dspZones()
{
    clear=false;
  jZones.forEach(function(zone){
    drawPolygon(zone);
});  
 
    $("#hideZones").css({"display":"block"});
     $("#dspZones").css({"display":"none"});
}

function hideZones()
{
    clear=true;
   ctx.clearRect(0,0,c.width, c.height); 
    $("#hideZones").css({"display":"none"});
     $("#dspZones").css({"display":"block"});

}
             
function drawPolygon(zone)
        {
        //    console.log(clear);
            if(clear==true)
                {
                 ctx.clearRect(0,0,c.width, c.height); 
                }
       
         console.log("drawing");
            console.log(zone);
        
            
    // ctx.fillStyle=zone.color;
            ctx.fillStyle="rgba(0,0,0,0.8)";
            
    ctx.fillRect(0,0,c.width, c.height); 
    ctx.globalCompositeOperation="destination-out";
    // ctx.globalAlpha=0.3;
            
           ctx.beginPath();
            ctx.moveTo(zone.points[0].x,zone.points[0].y);
            
            for(p=1;p<zone.points.length;p++)
            {
                 //console.log(p);
                ctx.lineTo(zone.points[p].x, zone.points[p].y);
            }
            
            ctx.closePath();
            ctx.fill();
            
         ctx.globalCompositeOperation="source-over";   
        }  

//detecting user interation

function locatePolygon(zone, mouse, clbck)
        {
  
        var points=zone.points;
        console.log("click");
            
           ctx.beginPath();
            ctx.moveTo(parseInt(points[0].x),parseInt(points[0].y));
            
         //console.log(zone.WORD["#text"]+"="+points[0].x+":"+ points[0].y);
            
            for(p=1;p<points.length;p++)
            {
              //  console.log(zone);
                ctx.lineTo(parseInt(points[p].x), parseInt(points[p].y));
                
                //console.log(points[p].x+":"+ points[p].y);
            }
            
            ctx.closePath();
           
         if (ctx.isPointInPath(mouse.offsetX, mouse.offsetY)) 
            {
             
             clbck(zone);
             //  transcribe(zone,mouse);
            }

     
        }

//zooming and scrolling
    
function zoomChng(zChng)
{
   // console.log(zChng);
    zm+=parseFloat(zChng); 

    $("#msCanvas").css({"transform":"scale("+zm+","+zm+")"});


}

function moveScreen(xy, ox, oy)
{
     console.log(xy.x+"//"+xy.y);

    var x=Math.max(0,xy.x-ox)-300;
    var y=Math.max(0,xy.y-oy)-400;

    console.log(x+"-ss-"+y);

    document.getElementById("manuscript").scrollTop=y;
    document.getElementById("manuscript").scrollLeft=x;


}
    

function focusOn(zone){
    zm=parseFloat(1);
    zoomChng(0.8);
    moveScreen(zone.points[0],200,200);
                            
                };
 
//set functions




//jQuery event handlers
//$("#instruction").html(slides[0].instruction);
console.log(slides[0].instruction);

    $("#msCanvas").click(function(e){
       jZones.forEach(function(zn){
          // console.log(e.offsetY +"-"+e.clientY+"-"+e.pageY);
         locatePolygon(zn, e, cClbck);
  
       });
    });

 $("#dspZones").click(function(e){
       dspZones();
       });
  
       
$("#hideZones").click(function(e){
       hideZones();
       });
   

$("#pills-guided-tab").click(function(e){
       cClbck=evalAnswer;
       });
  

$("#pills-freeform-tab").click(function(e){
       cClbck=focusOn;
       });
  
       