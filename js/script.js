function evalAnswer(zone)
{
    console.log("evaluating: "+zone.id);
   if($.inArray(zone.id,taskZones)!=-1) 
       {
           drawPolygon(zone);
           if($.inArray(zone.id,foundZones)==-1) 
               {
                 foundZones.push(zone.id);  
               }
           
       }
    else
        {
            alert("That's not the one. Try again!");
        }
    
    if(foundZones.sort().join(" ")==taskZones.sort().join(" "))
        {
   
           unlockMarker("m1");
            
            current++;
            nextSlide(slides[current]);
            
        }
}     


function nextSlide(slide)
{
    cClbck=evalAnswer;
 
    $("#instruction").html(slide.instruction);
    
    jZones=slide.zones;
    taskZones=[];
    
    slide.zones.forEach(function(z,zi){
      taskZones.push(z.id); 
        console.log(taskZones);
    });
}


console.log("script.js loaded");