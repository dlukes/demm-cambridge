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
This is called <i>rubrication</i> and is meant for emphasis - in medieval handwriting, <b>bold</b> and <i>italics</i> were not an option but <strong>colour-coding</strong> clearly was. The term comes from Latin, <i>ruber</i> means “red” and <i>rubrico</i> means “to colour red”. The word <i>rubrica</i> caught on in the 13th century and is still used today for “a title” or “a heading”.
`,
                 enter:function(){focusOut(); hideZones(); focusOn(findZones("id","rubrication2")[0])},
          },
            {
                content:"Let’s now see what the rubricated passage is about... and why the scribe would want to emphasise it. We said at the beginning that we would not do the reading but rules are meant to be broken, so we’ll treat you to some medieval English! Click below and a modern transcription of the rubricated text will appear - can you try to read it and guess where the passage comes from?"
            },
            {
                content:"<strong>And Y seie to you, verily ther ben summe stondynge here, whiche schulen not taste deeth, til thei seen the rewme of God. And it was don aftir these wordis almest eiyte daies, and he took Petre and James and Joon, and he stiede in to an hil, to preye. And while he preiede, the licnesse of his cheer was chaungid, and his clothing was whit schynynge.</strong>"
            },
            {
                content:"You’re right, it is The Gospel of Luke! 9:27-29, if you’re asking. Why would the scribe emphasise it? The Word of God deserves it, I hear you say, but there is a down-to-earth, practical reason too. It has to do with the structure of the book, in which a learned commentary always immediately follows a passage from the Scripture. The rubrication would save the theology-minded readers precious time as it serves to distinguish the Biblical text from those clever comments."
            },
         {
            content: `
Here, you can see a shorter bit of rubricated text - which is not all from the Bible! The rubrication here introduces a comment from a certain famous theologian, a well-respected <i>auctoritas</i>, or an authority on the interpretation of the bible. The very first underlined word is his name - can you read it?
`,
              enter:function(){focusOut(); hideZones(); focusOn(jZones[5])},
             
          },
                {
            content: "<div><div class='person unlocked'><img src='img/Ambrose.jpg'><div><p>It is Ambrose, or Ambrosius, a <i>church father</i> from the Italian city of Milan. Now a quiz on the church fathers! Just kidding. The whole four-word passage reads <strong>Ambrose here, taast deeth</strong>. So the first two words introduce the author whose commentary is cited - medieval intellectuals were very serious about their authorities!</p></div></div></div>"
  
          },
        {
            content: "The other two words, “taste death”, refer back to the biblical passage so that the reader can see what part exactly Ambrose is commenting on. This is an economical way to allow the reader easy navigation on the page, there and back  - the modern term for this type of reading is <i>discursive reading</i>"
  
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
