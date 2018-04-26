const pages = [
     {
      img:{url:"test.jpeg",size:[1651,2514]},

    // each page can be explored in a number of slides
    slides: [
      {
          fragments:[
              {
          enter:function(){moveScreen({x:0,y:0},0,0);zoomChng(-0.6);},
          content:"<p>This is a page from a <b>late-medieval English commentary</b> on one of the books of the Bible, more precisely <b>the Gospel of Luke</b>. As you can see, it is incredibly messy. That’s because the <i>manuscript</i>  it comes from was produced sometime in <b>late 1300s</b> but then used and reused by many generations of readers with different interests and needs.</p>"

      },
              {
                  content:"<p>We’d like to give you <b>a tour of the manuscript</b> so that you can see how it functioned and how medieval and renaissance intellectuals would work with its text. Be not afraid, you won’t need any reading skills in ancient tongues or handwriting - thankfully, our manuscript is all in English and transcribing it into modern script is somebody else’s job.</p> <p>To be able to look at the book from the readers’ perspective, let’s now try to untangle the snarl of marks, signs and scribbles. It’s through the users’ interventions that we can understand the story of a book across ages. We’ll start simple and take note of some basic techniques which the scribe and the reader would employ for ease of orientation and reference.</p>"

              }
              
          ]
      },
        {
            fragments:[
                {
                    content:"<p>First things last, a few notes on what you can expect from this website (and what you can’t!):</p> "
                },
                {
                    content:"<p>You are going to follow an interactive presentation. This means that you will be learning new things step by step, along a given path which we have cleared for you through the briars and brambles of the manuscript.</p><p>In fact, we will be showing you quite a few different pages from various parts of the book. You can think of each page as a single glade where you are invited to stop and look around - but as we can’t let you wander back and get lost, please take your time to explore and admire whenever a page captures your interest. The undergrowth is dense, please have trust in your guide!</p>"
 
                },
                {
                    content:"<p>You can see the window is divided into two parts. Your guide is on the right-hand side, you are reading from it right now - new information and tasks will appear here to help you advance. On the left, there will always be the image of a manuscript page. At certain points, you will be asked to click on parts of the page in order to progress in your journey. At other times, you will just read the guidance text here and click a “Next” button which will appear under it.</p><p>There will be a lot of new terms for you to pick up on your way. These will be marked in <i>italics</i>. If the burden becomes too heavy, there is a glossary for you to consult at any time. It’s ready to use under a separate tab in the upper right corner. There are some italicized terms for you in the next paragraph!</p>"

                },
                {
                    content:"<p>You should learn a lot about the reading and writing of manuscripts during your journey (we hope!), but please be aware that the footpath bypasses one particularly perilous area of the forest: <i>paleography</i>, i.e., the science of reading handwritten scripts. If you want to be able to read medieval English <i>hands</i>, there are some nice online introductions such as this: https://www.nottingham.ac.uk/toolkits/play_2887. </p>"
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
One of the ways the manuscript differs from a modern printed book is <b>the absence of paragraphs</b> as we know them. You can see that indents were not a thing, there are only two continuous columns. Yet still, the text actually is organised into paragraphs, only marked differently, with coloured signs we call <i>paramarks</i> of <i>parafs</i>.

`,
            enter: function() {
              console.log("focusing on paramark");
              focusOn(jZones[0]);
            }

          },
          {
            content: `
Now that you know how paragraphs were marked, find another paramark and click on it.
`,
              enter:function(){focusOut(); hideZones()},
              zones:["paramark4","paramark1","paramark2","paramark3"]
          },
              {
            content: `
There are <b>four paramarks</b> here in total, two sitting on the outer edge of the column, two inside. Marked by a coloured sign, a paragraph could therefore begin right where the last one ended. This saved space - and money! Parchment and paper were price-prohibitive.

`,
              enter:function(){moveScreen({x:0,y:0},0,0);zoomChng(-0.6);drawPolygons(findZones("cat","paramark"))},
            
          },
        ]
      },
      {
        fragments: [
          {
            content: `
Now that you’ve checked out all the little blue spots on the page, let’s turn to <strong>red</strong>! See the red lines here and there?
`,
              enter:function(){focusOut(); hideZones(); focusOn(findZones("id","rubrication1")[0])}
          },
          {
            content: `
Click on that loooong bit of text with red underlining. (It begins with... a <i>paramark</i>!)
`,
              enter:function(){focusOut(); hideZones()},
              zones:["rubrication2"]
          },
            {
            content: `
This is called <i>rubrication</i> and is meant for emphasis - in medieval handwriting, <b>bold</b> and <i>italics</i> were not an option but <strong>colour-coding</strong> clearly was. The term comes from Latin, <i>ruber</i> means “red” and <i>rubrico</i> means “to colour red”.
`,
                 enter:function(){focusOut(); hideZones(); focusOn(findZones("id","rubrication2")[0])},
          },
         {
            content: `
Different uses of rubrication - one of the authorities. The first underlined word is the name of a famous man. Can you read who the authority is?
`,
              enter:function(){focusOut(); hideZones(); focusOn(jZones[5])},
             
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
            content: "Some readers wrote down their own notes, can you find any?",
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
