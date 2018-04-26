const pages = [
     {
      img:{url:"test.jpeg",size:[1651,2514]},

    // each page can be explored in a number of slides
    slides: [
      {
          fragments:[
              {
          enter:function(){moveScreen({x:0,y:0},0,0);zoomChng(-0.6);},
          content:"This is a page from a <b>late-medieval English commentary</b> on one of the books of the Bible, more precisely the <b>Gospel of Luke</b>. As you can see, it is incredibly messy. That’s because the book it comes from was produced sometime in late 1300s but then used and reused by many generations of readers with different interests and needs. We’d like to give you a tour of the manuscript so that you can see how it functioned and how medieval and renaissance intellectuals would work with its text. Be not afraid, you won’t need any reading skills in ancient tongues or handwriting - thankfully, our manuscript is all in English and transcribing it into modern script is somebody else’s job."

      }
              
          ]
      }
        ]},
  // a presentation consists of pages, corresponding to the scanned pages of a manuscript
  {

      img:{url:"luke_93V.jpeg",size:[1456,2067]},

    // each page can be explored in a number of slides
    slides: [
      {
        // slides are divided into fragments
        fragments: [
          {
              enter:function(){moveScreen({x:0,y:0},0,0);},
            content: `
As you can see already, this is a much simpler page than the one before. That’s handy as it allows us a clear look at some of the most basic elements - but we will come back to all the funny clutter later, promise. By the end, you will be able to look at the very first page again and identify most of the features and also their purpose.

`
          },
          {
            content: `
One of the ways the manuscript differs from a modern printed book is the absence of paragraphs as we know them. Indents were not a thing - parchment and paper were pricy, space was too valuable! Still, the text is organised into paragraphs, only marked differently, with signs we call paramarks of parafs.

`,
            enter: function() {
              console.log("focusing on paramark");
              focusOn(jZones[0]);
            }

          },
          {
            content: `
Now that you know how paragraphs were marked, find another paramark and click it.
`,
              enter:function(){focusOut(); hideZones()},
              zones:["paramark4","paramark1","paramark2","paramark3"]
          },
              {
            content: `
There are four paramarks here in total, two sitting on the outer edge of the column, two inside. Marked by a coloured sign, a paragraph could therefore begin right where the last one ended. This saved space - and money! Parchment and paper were price-prohibitive.

`,
              enter:function(){moveScreen({x:0,y:0},0,0);zoomChng(-0.6);drawPolygons(findZones("cat","paramark"))},
            
          },
        ]
      },
      {
        fragments: [
          {
            content: `
Now that you’ve checked all the blue spots on the page, let’s turn to red! See, it’s all over the place.
`,
              enter:function(){focusOut(); hideZones(); focusOn(findZones("id","rubrication1")[0])}
          },
          {
            content: `
 Click on the loooong bit of text with red underlining. (It begins with a paramark!)
`,
              enter:function(){focusOut(); hideZones()},
              zones:["rubrication2"]
          },
            {
            content: `
 Rubrication was used for highlighting text. Here the scribe is highlighting a passage from the Bible. After all, this is a commentary on it.+ possibly part of bible and transcription in info tab
`,
                 enter:function(){focusOut(); hideZones(); focusOn(jZones[5])},
          },
         {
            content: `
Different uses of rubrication - one of the authorities. The first underlined word is the name of a famous man. Can you read who the authority is?
`,
              enter:function(){focusOut(); hideZones(); focusOn(jZones[6])},
             
          },
        {
            content: `
<img src="img/Ambrose.jpg" class="portrait"> Next up, a quiz on church fathers! Just joking.
`,
               
          },
            {
            content: " As far as we can tell, paramarks and rubrication were the scribe's work. Now let's see what the readers did on the page! Can you find a hand with a pointing finger?",
             enter:function(){focusOut(); hideZones();},    
               zones:["manicule1"]
          },
            
            {
            content: "When you look below the manicule, can you see another annotation just marking a point of interest in the text",
             enter:function(){focusOut(); hideZones();},    
               zones:["crossed_lines1"]
          },
             {
            content: "Correct! These are just a two ways of marking some places in text but there were many more.",
          },
            {
            content: "Some authors wrote down their own notes, can you find any?",
             enter:function(){focusOut(); hideZones();},    
               zones:["gloss"]
          },
             {
            content: "THIS IS ALL WE HAVE SO FAR",
             enter:function(){focusOut(); hideZones();},    
             
          }
           
           
           
            
          
            
           
            
        ]
      }
    ]
  },
];
