
const personsTmp= Vue.component("notes-persons",{
    template:"<div><div :class='[\"person\",{\"locked\":(parseInt((p.p*100)+(p.s*10)+p.f)>=parseInt(($route.params.page*100)+($route.params.slide*10)+$route.params.fragment))}]'  v-for='p in persons'><img :src='p.img'><div><h5>{{p.name}}</h5><p>{{p.description}}</p></div></div></div>",
    data(){return {persons:persons}},
    methods:{
        unlock(nm)
    {
     console.log(this.persons[nm].data.name);
    }
    } 
});



const termsTmp= Vue.component("notes-terms",{
    template:"<div><li  v-for='t in terms' :class='[\"term\",{\"locked\":(parseInt(t.p*100+t.s*10+t.f)>=parseInt($route.params.page*100+$route.params.slide*10+$route.params.fragment))}]'><b>{{t.name}}</b> - {{t.def}}</li></div>",
    data(){return {terms:terms}}
    
});

const zoneTmp= Vue.component("zone-info",{
    template:"<div class=zoneInfo><p>This is a <b>{{seezone.cat}}</b></p><p><b>Transcription: </b>{{seezone}}</p></div>",
    props:["seezone"]
    
});
    
 
function zoneInfo(zone)
{
     $("#zoneInfo").html("");
    
    $("#zoneInfo").append("<p>This is a <b>"+zone.cat+"</b></p><p><b>Transcription: </b>"+zone.transcr+"</p>");
    
  $("#zoneInfo").append("<button class=btn-primary onClick='hideZones();drawPolygons(findZones(\"cat\",\""+zone.cat+"\"))'>Show</button>");
}




//data

var persons=[
   
    {id:"Augustine",  name:"Saint Augustine", description:"A very important philosopher and bishop of Hippone", img:"img/Augustine.jpg", p:2, s:0, f:1},
     {id:"Bede", name:"Bede", description:"The author of the Anglo-saxon chronicle", img:"img/Bede.jpg",p:2, s:1, f:1},
    {id:"Ambrose", name:"Saint Ambrose", description:"A bishop of Milan, born around 340. Ambrose was one of the four original Doctors of the Church, and is the patron saint of Milan. He is notable for his influence on Augustine of Hippo.", img:"img/Ambrose.jpg", p:1, s:1, f:4}
    
];

var terms=[
    {id:"paleography",locked:true, name:"Paleography", def:"The study of historical forms of writing.", p:1, s:1, f:1},
     {id:"manuscript",locked:true, name:"Manuscript", def:"Literally “written by hand.” Abbreviated as MS (singular) or MSS (plural).", p:1, s:1, f:1},
     {id:"hand",locked:true, name:"Hand", def:"The writing of an individual scribe, with individual characteristics.", p:1, s:1, f:1},
    {id:"paraf",locked:false, name:"Paraf", def:"A symbol  marking a paragraph/ a section in the continuous text.", p:1, s:0, f:2},
    {id:"paramark",locked:true, name:"Rubrication", def:"Another word for paraf, see above.", p:1, s:0, f:2},
    {id:"rubrication",locked:true, name:"Rubrication", def:"Using red colour to emphasize or mark certain parts of the text.", p:1, s:1, f:1},
     {id:"rubrico",locked:true, name:"Rubrico", def:"Latin, “to colour red”", p:1, s:1, f:1},
     {id:"ruber",locked:true, name:"Ruber", def:"Latin word meaning “red”.", p:1, s:1, f:1}
     
    
];



    

    

    

    


var places=[ {id:"monastery", locked:true, name:"Lindisfarne Priory", coords:[55.6691551,-1.8008945,15], description:"The famous Lindisfarne monastery"},
    {id:"Hippone",locked:true, name:"Hippone", coords:[36.883233,7.7518818,15], description:"This is where Augustine served as a bishop."},
     {id:"Milan",locked:true, type:"place", name:"Milan", coords:[45.4626482,9.0376489,11], description:"This is where Ambrose served as a bishop."},
     {id:"jarrow", locked:true,type:"place", name:"St Peter's Church", coords:[54.9131231,-1.3748445,15], description:"The Church in Jarrow where Bede worked."}
           ];
 


var jZones=[{"id":"paramark1","color":"rgba(0, 255, 0, 0.5)","points":[{"x":614,"y":105},{"x":655,"y":101},{"x":655,"y":118},{"x":644,"y":133},{"x":644,"y":155},{"x":628,"y":166},{"x":604,"y":132}],"cat":"paramark"},{"id":"paramark2","color":"rgba(0, 255, 0, 0.5)","points":[{"x":810,"y":407},{"x":866,"y":406},{"x":868,"y":435},{"x":852,"y":470},{"x":815,"y":470},{"x":799,"y":436}],"cat":"paramark"},{"id":"gloss","color":"rgba(0, 255, 255, 0.5)","points":[{"x":19,"y":1286},{"x":255,"y":1267},{"x":255,"y":1339},{"x":31,"y":1349}],"cat":"gloss"},{"id":"paramark3","color":"rgba(0, 255, 0, 0.5)","points":[{"x":219,"y":822},{"x":292,"y":814},{"x":297,"y":831},{"x":262,"y":850},{"x":260,"y":891},{"x":216,"y":870}],"cat":"paramark"},{"id":"paramark4","color":"rgba(0, 255, 0, 0.5)","points":[{"x":921,"y":1583},{"x":978,"y":1581},{"x":968,"y":1611},{"x":969,"y":1652},{"x":935,"y":1658},{"x":914,"y":1615}],"cat":"paramark"},{"id":"rubrication3","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1288,"y":1159},{"x":1407,"y":1160},{"x":1397,"y":1244},{"x":836,"y":1262},{"x":836,"y":1210},{"x":873,"y":1200},{"x":1249,"y":1203}],"cat":"rubrication"},{"id":"manicule1","points":[{"x":788,"y":1267},{"x":830,"y":1250},{"x":870,"y":1192},{"x":838,"y":1168},{"x":799,"y":1193},{"x":781,"y":1262}],cat:"manicule"},{"id":"vertical_line","color":"rgba(0, 255, 0, 0.5)","points":[{"x":214,"y":1475},{"x":286,"y":1470},{"x":287,"y":1607},{"x":221,"y":1608}],"cat":"lines"},{"id":"crossed_lines1","color":"rgba(0, 255, 0, 0.5)","points":[{"x":794,"y":1416},{"x":862,"y":1411},{"x":872,"y":1468},{"x":794,"y":1483}],"cat":"lines"},{"id":"crossed_lines2","color":"rgba(0, 255, 255, 0.5)","points":[{"x":820,"y":1651},{"x":879,"y":1651},{"x":876,"y":1696},{"x":809,"y":1700}],"cat":"lines"},{"id":"crossed_lines3","color":"rgba(0, 255, 0, 0.5)","points":[{"x":798,"y":1766},{"x":856,"y":1758},{"x":863,"y":1798},{"x":807,"y":1814}],"cat":"lines"},{"id":"rubrication2","color":"rgba(255, 255, 0, 0.5)","points":[{"x":569,"y":789},{"x":773,"y":794},{"x":776,"y":1201},{"x":723,"y":1237},{"x":560,"y":1242},{"x":251,"y":1248},{"x":250,"y":900},{"x":274,"y":806},{"x":527,"y":816}],"cat":"rubrication", transcr:"And Y seie to you, verily ther ben summe stondynge here, whiche schulen not taste deeth, til thei seen the rewme of God. And it was don aftir these wordis almest eiyte daies, and he took Petre and James and Joon, and he stiede in to an hil, to preye. And while he preiede, the licnesse of his cheer was chaungid, and his clothing was whit schynynge."},{"id":"rubrication_ambrose","color":"rgba(255, 255, 0, 0.5)","points":[{"x":857,"y":394.7361145019531},{"x":1370,"y":362},{"x":1370,"y":453},{"x":869,"y":449.7361145019531}],"cat":"rubrication", transcr:"Ambrose here, taast deeth"},{"id":"rubrication1","color":"rgba(255, 255, 0, 0.5)","points":[{"x":236,"y":141},{"x":242,"y":97},{"x":615,"y":96},{"x":599,"y":146}],"cat":"rubrication"}];