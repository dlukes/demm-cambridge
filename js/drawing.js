

             
    var jZones=[{"color":"red","points":[{"x":464,"y":679},{"x":736,"y":679},{"x":733,"y":729},{"x":470,"y":739}]},{"color":"red","points":[{"x":546,"y":793},{"x":584,"y":791},{"x":574,"y":833},{"x":540,"y":831}]},{"color":"red","points":[{"x":1282,"y":1341},{"x":1441,"y":1333},{"x":1449,"y":1408},{"x":1292,"y":1394}]},{"color":"red","points":[{"x":1322,"y":1905},{"x":1494,"y":1909},{"x":1486,"y":1966},{"x":1306,"y":1959}]}];     
    var zm=parseFloat(1);         
        loadImg({url:"test.jpeg",size:[1601,2514]});    
        
    //initialize canvas
     var c=document.getElementById("msCanvas");
     var ctx=c.getContext("2d");

jZones.forEach(function(zone){
   // drawPolygon(zone,false);
});
             
        function loadImg(img)
             {
                $("#msCanvas").css({"background-image":"url('img/"+img.url+"')"}); 
                  $("#msCanvas").attr({"width":img.size[0]+"px","height":img.size[1]+"px"}); 
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
             
             drawPolygon(zone,false);
             //  transcribe(zone,mouse);
            }

     
        }

    
        function zoomChng(zChng)
        {
            console.log(zChng);
            zm+=parseFloat(zChng); 
            
            $("#msCanvas").css({"transform":"scale("+zm+","+zm+")"});
       
        console.log( $(canvas).css("width"));
        }
             
             
    $("#msCanvas").click(function(e){
       jZones.forEach(function(zn){
          // console.log(e.offsetY +"-"+e.clientY+"-"+e.pageY);
         locatePolygon(zn, e);
  
       });
    });
       