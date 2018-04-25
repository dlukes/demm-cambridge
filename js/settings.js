

    
      
//view settings
var cClbck=function(){};
var evalAnswer=function(){};
var zm=parseFloat(1); 
var clear=true;

var current=0;

var img={url:"luke_93V.jpeg",size:[1651,2514]};



//storyline data


var slides=[{id:"s1",
            instruction:"Find two zones",
             zones:[{id:"z1","color":"rgba(255, 0, 0, 0.5)","points":[{"x":464,"y":679},{"x":736,"y":679},{"x":733,"y":729},{"x":470,"y":739}],"cats":["print"]},
            {id:"z2","color":"rgba(0, 255, 255, 0.5)","points":[{"x":546,"y":793},{"x":584,"y":791},{"x":574,"y":833},{"x":540,"y":831}],"cats":["initial"]}] },
           
           {id:"s2",
            instruction:"Find two GLOSSES",
             zones:[{id:"z3","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1282,"y":1341},{"x":1441,"y":1333},{"x":1449,"y":1408},{"x":1292,"y":1394}],"cats":["gloss"]},{id:"z4","color":"rgba(255, 255, 0, 0.5)","points":[{"x":1322,"y":1905},{"x":1494,"y":1909},{"x":1486,"y":1966},{"x":1306,"y":1959}],"cats":["gloss"]}]
            }];


var extras=[
    {id:"monastery", type:"place", data:{name:"Lindisfarne Priory", coords:[55.6691551,-1.8008945,15], description:"The famous Lindisfarne monastery"}},
    {id:"Hippone", type:"place", data:{name:"Hippone", coords:[36.883233,7.7518818,15], description:"This is where Augustine served as a bishop."}},
     {id:"Milan", type:"place", data:{name:"Milan", coords:[45.4626482,9.0376489,11], description:"This is where Ambrose served as a bishop."}},
     {id:"jarrow", type:"place", data:{name:"St Peter's Church", coords:[54.9131231,-1.3748445,15], description:"The Church in Jarrow where Bede worked."}},
    {id:"Augustine", type:"person", data:{name:"Saint Augustine", description:"A very important philosopher and bishop of Hippone", img:"Augustine.jpg"}},
     {id:"Bede", type:"person", data:{name:"Bede", description:"The author of the Anglo-saxon chronicle", img:"Bede.jpg"}},
    {id:"Ambrose", type:"person", data:{name:"Saint Ambrose", description:"Boshop of Milan", img:"Ambrose.jpg"}}
    
];

var jZones=[
    {
        "id": "rubrication1",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 364,
                "y": 399
            },
            {
                "x": 741,
                "y": 397
            },
            {
                "x": 727,
                "y": 382
            },
            {
                "x": 740,
                "y": 361
            },
            {
                "x": 635,
                "y": 365
            },
            {
                "x": 583,
                "y": 363
            },
            {
                "x": 553,
                "y": 359
            },
            {
                "x": 485,
                "y": 365
            },
            {
                "x": 447,
                "y": 355
            },
            {
                "x": 422,
                "y": 369
            },
            {
                "x": 401,
                "y": 358
            },
            {
                "x": 383,
                "y": 362
            },
            {
                "x": 355,
                "y": 363
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "rubrication2",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 372,
                "y": 1080
            },
            {
                "x": 426,
                "y": 1081
            },
            {
                "x": 668,
                "y": 1085
            },
            {
                "x": 687,
                "y": 1053
            },
            {
                "x": 890,
                "y": 1050
            },
            {
                "x": 887,
                "y": 1462
            },
            {
                "x": 689,
                "y": 1467
            },
            {
                "x": 664,
                "y": 1498
            },
            {
                "x": 367,
                "y": 1502
            },
            {
                "x": 368,
                "y": 1132
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "gloss",
        "color": "rgba(0, 255, 255, 0.5)",
        "points": [
            {
                "x": 148,
                "y": 1557
            },
            {
                "x": 228,
                "y": 1556
            },
            {
                "x": 362,
                "y": 1543
            },
            {
                "x": 366,
                "y": 1572
            },
            {
                "x": 347,
                "y": 1587
            },
            {
                "x": 244,
                "y": 1589
            },
            {
                "x": 144,
                "y": 1585
            }
        ],
        "cats": [
            "gloss"
        ]
    },
    {
        "id": "rubrication_ambrose",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 971,
                "y": 670
            },
            {
                "x": 1172,
                "y": 669
            },
            {
                "x": 1196,
                "y": 629
            },
            {
                "x": 1415,
                "y": 629
            },
            {
                "x": 1439,
                "y": 635
            },
            {
                "x": 1438,
                "y": 661
            },
            {
                "x": 1202,
                "y": 669
            },
            {
                "x": 1172,
                "y": 676
            },
            {
                "x": 1148,
                "y": 691
            },
            {
                "x": 1120,
                "y": 703
            },
            {
                "x": 966,
                "y": 707
            },
            {
                "x": 952,
                "y": 698
            },
            {
                "x": 957,
                "y": 683
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "paramark1",
        "color": "rgba(0, 255, 0, 0.5)",
        "points": [
            {
                "x": 739,
                "y": 366
            },
            {
                "x": 777,
                "y": 363
            },
            {
                "x": 765,
                "y": 376
            },
            {
                "x": 755,
                "y": 376
            },
            {
                "x": 751,
                "y": 415
            },
            {
                "x": 741,
                "y": 400
            },
            {
                "x": 732,
                "y": 383
            }
        ],
        "cats": [
            "paramark"
        ]
    },
    {
        "id": "paramark2",
        "color": "rgba(0, 255, 0, 0.5)",
        "points": [
            {
                "x": 341,
                "y": 1087
            },
            {
                "x": 410,
                "y": 1072
            },
            {
                "x": 370,
                "y": 1090
            },
            {
                "x": 365,
                "y": 1139
            },
            {
                "x": 338,
                "y": 1121
            }
        ],
        "cats": [
            "paramark"
        ]
    },
    {
        "id": "paramark3",
        "color": "rgba(0, 255, 0, 0.5)",
        "points": [
            {
                "x": 927,
                "y": 671
            },
            {
                "x": 971,
                "y": 665
            },
            {
                "x": 954,
                "y": 680
            },
            {
                "x": 957,
                "y": 715
            },
            {
                "x": 944,
                "y": 724
            },
            {
                "x": 935,
                "y": 710
            },
            {
                "x": 927,
                "y": 697
            }
        ],
        "cats": [
            "paramark"
        ]
    },
    {
        "id": "paramark4",
        "color": "rgba(0, 255, 0, 0.5)",
        "points": [
            {
                "x": 1037,
                "y": 1847
            },
            {
                "x": 1082,
                "y": 1844
            },
            {
                "x": 1082,
                "y": 1856
            },
            {
                "x": 1069,
                "y": 1856
            },
            {
                "x": 1061,
                "y": 1897
            },
            {
                "x": 1050,
                "y": 1883
            },
            {
                "x": 1034,
                "y": 1873
            }
        ],
        "cats": [
            "paramark"
        ]
    },
    {
        "id": "vertical_line",
        "points": [
            {
                "x": 343,
                "y": 1740
            },
            {
                "x": 368,
                "y": 1740
            },
            {
                "x": 368,
                "y": 1854
            },
            {
                "x": 351,
                "y": 1854
            }
        ],
        "cats": []
    },
    {
        "id": "crossed_lines1",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 926,
                "y": 1693
            },
            {
                "x": 964,
                "y": 1686
            },
            {
                "x": 964,
                "y": 1715
            },
            {
                "x": 931,
                "y": 1722
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "crossed_lines2",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 939,
                "y": 1924
            },
            {
                "x": 970,
                "y": 1924
            },
            {
                "x": 968,
                "y": 1949
            },
            {
                "x": 943,
                "y": 1945
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "crossed_lines3",
        "color": "rgba(0, 255, 255, 0.5)",
        "points": [
            {
                "x": 921,
                "y": 2035
            },
            {
                "x": 955,
                "y": 2026
            },
            {
                "x": 961,
                "y": 2058
            },
            {
                "x": 932,
                "y": 2057
            }
        ],
        "cats": [
            "gloss"
        ]
    },
    {
        "id": "manicule1",
        "color": "rgba(255, 255, 0, 0.5)",
        "points": [
            {
                "x": 900,
                "y": 1471
            },
            {
                "x": 952,
                "y": 1443
            },
            {
                "x": 959,
                "y": 1452
            },
            {
                "x": 951,
                "y": 1462
            },
            {
                "x": 949,
                "y": 1478
            },
            {
                "x": 923,
                "y": 1512
            }
        ],
        "cats": [
            "rubrication"
        ]
    },
    {
        "id": "paramark1",
        "color": "rgba(0, 255, 0, 0.5)",
        "points": [
            {
                "x": 1430,
                "y": 1455
            },
            {
                "x": 1446,
                "y": 1426
            },
            {
                "x": 1511,
                "y": 1427
            },
            {
                "x": 1501,
                "y": 1463
            },
            {
                "x": 1436,
                "y": 1461
            },
            {
                "x": 1407,
                "y": 1497
            },
            {
                "x": 952,
                "y": 1503
            },
            {
                "x": 966,
                "y": 1461
            },
            {
                "x": 1030,
                "y": 1466
            },
            {
                "x": 1074,
                "y": 1462
            },
            {
                "x": 1139,
                "y": 1469
            },
            {
                "x": 1398,
                "y": 1462
            }
        ],
        "cats": [
            "paramark"
        ]
    }
];

var taskZones=[];
var foundZones=[];