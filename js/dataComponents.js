
const personsTmp= Vue.component("notes-persons",{
    template:"<div><div :class='[\"person\",{\"locked\":(p.p>=$route.params.page && p.s>=$route.params.slide && p.f>=$route.params.fragment)}]'  v-for='p in persons'><img :src='p.img'><div><h5>{{p.name}}</h5><p>{{p.description}}</p></div></div><></div>",
    data(){return {persons:persons}},
    methods:{
        unlock(nm)
    {
     console.log(this.persons[nm].data.name);
    }
    } 
});


const termsTmp= Vue.component("notes-terms",{
    template:"<div><li  v-for='t in terms' :class='[\"term\",{\"locked\":(t.p>=$route.params.page && t.s>=$route.params.slide && t.f>=$route.params.fragment)}]'><b>{{t.name}}</b> - {{t.def}}</li></div>",
    data(){return {terms:terms}}
    
});

const zoneTmp= Vue.component("zone-info",{
    template:"<div class=zoneInfo :seezone='0'><p>This is a <b>{{seezone}}</b></p><p><b>Transcription: </b>{{seezone}}</p></div>",
    props:["seezone"]
    
});
    
    

//data

var persons=[
   
    {id:"Augustine",  name:"Saint Augustine", description:"A very important philosopher and bishop of Hippone", img:"img/Augustine.jpg", p:1, s:0, f:1},
     {id:"Bede", name:"Bede", description:"The author of the Anglo-saxon chronicle", img:"img/Bede.jpg",p:1, s:1, f:1},
    {id:"Ambrose", name:"Saint Ambrose", description:"Bishop of Milan", img:"img/Ambrose.jpg", p:1, s:1, f:1}
    
];

var terms=[
   
    {id:"paraf",locked:false, name:"Paramark", def:"A symbol used to mark paragraphs", p:1, s:0, f:1},
    {id:"rubrication",locked:true, name:"Rubrication", def:"Using red colour for marking", p:1, s:1, f:1}
];

var places=[ {id:"monastery", locked:true, type:"place", data:{name:"Lindisfarne Priory", coords:[55.6691551,-1.8008945,15], description:"The famous Lindisfarne monastery"}},
    {id:"Hippone",locked:true, type:"place", data:{name:"Hippone", coords:[36.883233,7.7518818,15], description:"This is where Augustine served as a bishop."}},
     {id:"Milan",locked:true, type:"place", data:{name:"Milan", coords:[45.4626482,9.0376489,11], description:"This is where Ambrose served as a bishop."}},
     {id:"jarrow", locked:true,type:"place", data:{name:"St Peter's Church", coords:[54.9131231,-1.3748445,15], description:"The Church in Jarrow where Bede worked."}}
           ];



var jZones=[{"id":"paramark1","color":"rgba(0, 0, 255, 0.5)","points":[{"x":616,"y":118},{"x":629,"y":106},{"x":665,"y":106},{"x":650,"y":124},{"x":642,"y":161},{"x":626,"y":161},{"x":617,"y":141}],"cat":"paramark"},{"id":"paramark2","color":"rgba(0, 0, 255, 0.5)","points":[{"x":226,"y":825},{"x":296,"y":817},{"x":287,"y":834},{"x":260,"y":841},{"x":251,"y":889},{"x":240,"y":872},{"x":221,"y":865}],"cat":"paramark"},{"id":"paramark4","color":"rgba(0, 0, 255, 0.5)","points":[{"x":922,"y":1593},{"x":965,"y":1588},{"x":969,"y":1604},{"x":954,"y":1605},{"x":957,"y":1635},{"x":944,"y":1640},{"x":936,"y":1626},{"x":920,"y":1624}],"cat":"paramark"},{"id":"paramark3","color":"rgba(0, 0, 255, 0.5)","points":[{"x":816,"y":412},{"x":866,"y":415},{"x":848,"y":431},{"x":845,"y":462},{"x":829,"y":467},{"x":827,"y":457},{"x":815,"y":447}],"cat":"paramark"},{"id":"rubrication1","color":"rgba(0, 255, 0, 0.5)","points":[{"x":244,"y":105},{"x":622,"y":107},{"x":601,"y":146},{"x":240,"y":144}],"cat":"rubrication"},
            
            {"id":"rubrication2","color":"rgba(0, 255, 0, 0.5)","points":[{"x":303,"y":826},{"x":551,"y":827},{"x":576,"y":790},{"x":755,"y":795},{"x":779,"y":1206},{"x":567,"y":1218},{"x":551,"y":1240},{"x":264,"y":1246},{"x":249,"y":1012},{"x":261,"y":866},{"x":247,"y":817}],"cat":"rubrication",transcr:"forsothe I seie to yeow"},
     
            {"id":"rubrication_ambrose","color":"rgba(0, 255, 0, 0.5)","points":[{"x":874,"y":412},{"x":1070,"y":405},{"x":1090,"y":375},{"x":1346,"y":383},{"x":1328,"y":406},{"x":1086,"y":410},{"x":1027,"y":434},{"x":1018,"y":448},{"x":856,"y":454},{"x":834,"y":409}],"cat":"rubrication", transcr:"ambrose here taaste deeth"},
            
            
 {"id":"rubrication3","color":"rgba(0, 255, 0, 0.5)","points":[{"x":849,"y":1209},{"x":1306,"y":1202},{"x":1335,"y":1174},{"x":1393,"y":1176},{"x":1386,"y":1202},{"x":1315,"y":1214},{"x":1309,"y":1242},{"x":842,"y":1257},{"x":839,"y":1234}],"cat":"rubrication"},{"id":"rubrication4","color":"rgba(0, 255, 0, 0.5)","points":[{"x":1307,"y":1583},{"x":1324,"y":1553},{"x":1381,"y":1553},{"x":1396,"y":1586},{"x":986,"y":1598},{"x":907,"y":1629},{"x":834,"y":1625},{"x":844,"y":1586},{"x":1012,"y":1581},{"x":1192,"y":1585}],"cat":"rubrication"},{"id":"vertical_line","points":[{"x":224,"y":1482},{"x":259,"y":1482},{"x":266,"y":1602},{"x":230,"y":1601}]},{"id":"crossed_lines1","color":"rgba(0, 0, 255, 0.5)","points":[{"x":808,"y":1437},{"x":842,"y":1431},{"x":846,"y":1458},{"x":814,"y":1472}],"cat":"lines"},{"id":"crossed_lines2","color":"rgba(0, 0, 255, 0.5)","points":[{"x":823,"y":1668},{"x":858,"y":1666},{"x":854,"y":1692},{"x":818,"y":1696}],"cat":"lines"},{"id":"crossed_lines3","color":"rgba(0, 0, 255, 0.5)","points":[{"x":811,"y":1775},{"x":843,"y":1772},{"x":845,"y":1801},{"x":810,"y":1810}],"cat":"lines"},{"id":"manicule1","color":"rgba(0, 0, 255, 0.5)","points":[{"x":780,"y":1218},{"x":842,"y":1183},{"x":848,"y":1201},{"x":826,"y":1246},{"x":797,"y":1253}],"cat":"manicule"},{"id":"gloss","color":"rgba(0, 255, 0, 0.5)","points":[{"x":28,"y":1289},{"x":253,"y":1288},{"x":248,"y":1337},{"x":34,"y":1330}],"cat":"gloss"}];

var jZones2=[{"id":"paramark1","color":"rgba(0, 255, 0, 0.5)","points":[{"x":614,"y":105},{"x":655,"y":101},{"x":655,"y":118},{"x":644,"y":133},{"x":644,"y":155},{"x":628,"y":166},{"x":604,"y":132}],"cat":"paramark"},{"id":"paramark2","color":"rgba(0, 255, 0, 0.5)","points":[{"x":810,"y":407},{"x":866,"y":406},{"x":868,"y":435},{"x":852,"y":470},{"x":815,"y":470},{"x":799,"y":436}],"cat":"paramark"},{"id":"gloss","color":"rgba(0, 255, 255, 0.5)","points":[{"x":19,"y":1286},{"x":255,"y":1267},{"x":255,"y":1339},{"x":31,"y":1349}],"cat":"gloss"},{"id":"paramark3","color":"rgba(0, 255, 0, 0.5)","points":[{"x":219,"y":822},{"x":292,"y":814},{"x":297,"y":831},{"x":262,"y":850},{"x":260,"y":891},{"x":216,"y":870}],"cat":"paramark"},{"id":"paramark4","color":"rgba(0, 255, 0, 0.5)","points":[{"x":921,"y":1583},{"x":978,"y":1581},{"x":968,"y":1611},{"x":969,"y":1652},{"x":935,"y":1658},{"x":914,"y":1615}],"cat":"paramark"},{"id":"rubrication3","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1288,"y":1159},{"x":1407,"y":1160},{"x":1397,"y":1244},{"x":836,"y":1262},{"x":836,"y":1210},{"x":873,"y":1200},{"x":1249,"y":1203}],"cat":"rubrication"},{"id":"default","points":[{"x":788,"y":1267},{"x":830,"y":1250},{"x":870,"y":1192},{"x":838,"y":1168},{"x":799,"y":1193},{"x":781,"y":1262}]},{"id":"paramark1","color":"rgba(0, 255, 0, 0.5)","points":[{"x":214,"y":1475},{"x":286,"y":1470},{"x":287,"y":1607},{"x":221,"y":1608}],"cat":"paramark"},{"id":"paramark2","color":"rgba(0, 255, 0, 0.5)","points":[{"x":794,"y":1416},{"x":862,"y":1411},{"x":872,"y":1468},{"x":794,"y":1483}],"cat":"paramark"},{"id":"gloss","color":"rgba(0, 255, 255, 0.5)","points":[{"x":820,"y":1651},{"x":879,"y":1651},{"x":876,"y":1696},{"x":809,"y":1700}],"cat":"gloss"},{"id":"paramark3","color":"rgba(0, 255, 0, 0.5)","points":[{"x":798,"y":1766},{"x":856,"y":1758},{"x":863,"y":1798},{"x":807,"y":1814}],"cat":"paramark"},{"id":"rubrication2","color":"rgba(255, 255, 0, 0.5)","points":[{"x":569,"y":789},{"x":773,"y":794},{"x":776,"y":1201},{"x":723,"y":1237},{"x":560,"y":1242},{"x":251,"y":1248},{"x":250,"y":900},{"x":274,"y":806},{"x":527,"y":816}],"cat":"rubrication"},{"id":"rubrication_ambrose","color":"rgba(255, 255, 0, 0.5)","points":[{"x":857,"y":394.7361145019531},{"x":1370,"y":362},{"x":1370,"y":453},{"x":869,"y":449.7361145019531}],"cat":"rubrication"},{"id":"rubrication1","color":"rgba(255, 255, 0, 0.5)","points":[{"x":236,"y":141},{"x":242,"y":97},{"x":615,"y":96},{"x":599,"y":146}],"cat":"rubrication"}];