

    
      
//view settings
var cClbck=function(){};
var evalAnswer=function(){};
var zm=parseFloat(1); 
var clear=true;

var current=0;

var img={url:"test.jpeg",size:[1601,2514]};



//storyline data


var slides=[{id:"s1",
            instruction:"Find two zones",
             zones:[{id:"z1","color":"rgba(255, 0, 0, 0.5)","points":[{"x":464,"y":679},{"x":736,"y":679},{"x":733,"y":729},{"x":470,"y":739}],"cats":["print"]},
            {id:"z2","color":"rgba(0, 255, 255, 0.5)","points":[{"x":546,"y":793},{"x":584,"y":791},{"x":574,"y":833},{"x":540,"y":831}],"cats":["initial"]}] },
           
           {id:"s2",
            instruction:"Find two GLOSSES",
             zones:[{id:"z3","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1282,"y":1341},{"x":1441,"y":1333},{"x":1449,"y":1408},{"x":1292,"y":1394}],"cats":["gloss"]},{id:"z4","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1322,"y":1905},{"x":1494,"y":1909},{"x":1486,"y":1966},{"x":1306,"y":1959}],"cats":["gloss"]}]
            }];

var jZones=[{id:"z1","color":"rgba(255, 0, 0, 0.5)","points":[{"x":464,"y":679},{"x":736,"y":679},{"x":733,"y":729},{"x":470,"y":739}],"cats":["print"]},
            {id:"z2","color":"rgba(0, 255, 255, 0.5)","points":[{"x":546,"y":793},{"x":584,"y":791},{"x":574,"y":833},{"x":540,"y":831}],"cats":["initial"]}];

var taskZones=[];
var foundZones=[];