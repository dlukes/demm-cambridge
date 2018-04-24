     
             
    var jZones=[{points:[{x:10,y:10},{x:58,y:10},{x:60,y:25},{x:30,y:30}], color:"red"},
               {points: [{x:200,y:200},{x:300,y:200},{x:300,y:400}], color:"blue"}];        
             
        loadImg("test.jpeg");    
        
    //initialize canvas
     var c=document.getElementById("msCanvas");
     var ctx=c.getContext("2d");
             
    var pts=[{x:10,y:10},{x:58,y:10},{x:60,y:25},{x:30,y:30}];
  // drawPolygon(jZones[1].polygon);
             
             
             
        function loadImg(img)
             {
                $("#msCanvas").css({"background-image":"url('img/"+img+"')"});  
             }
             
             
     function drawPolygon(zone, clear)
        {
            if(clear==true)
                {
                 ctx.clearRect(0,0,c.width, c.height); 
                }
       
         console.log("drawing");
        
            
     ctx.fillStyle=zone.color;
     ctx.globalAlpha=0.3;
            
           ctx.beginPath();
            ctx.moveTo(zone.points[0].x,zone.points[0].y);
            
            for(p=1;p<zone.points.length;p++)
            {
                 //console.log(p);
                ctx.lineTo(zone.points[p].x, zone.points[p].y);
            }
            
            ctx.closePath();
            ctx.fill();
            
        }  
    
    function locatePolygon(zone, mouse)
        {
  
        var points=zone.points;
        console.log("click");
            
           ctx.beginPath();
            ctx.moveTo(parseInt(points[0].x),parseInt(points[0].y));
            
         //console.log(zone.WORD["#text"]+"="+points[0].x+":"+ points[0].y);
            
            for(p=1;p<points.length;p++)
            {
                console.log(zone);
                ctx.lineTo(parseInt(points[p].x), parseInt(points[p].y));
                
                //console.log(points[p].x+":"+ points[p].y);
            }
            
            ctx.closePath();
           
         if (ctx.isPointInPath(mouse.offsetX, mouse.offsetY)) 
            {
             
             drawPolygon(zone);
             //  transcribe(zone,mouse);
            }

     
        }
             
             
    $("#msCanvas").click(function(e){
       jZones.forEach(function(zn){
          // console.log(e.offsetY +"-"+e.clientY+"-"+e.pageY);
         locatePolygon(zn, e);
  
       });
    });
       