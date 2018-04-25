const pages = [
  // a presentation consists of pages, corresponding to the scanned pages of a manuscript
  {

      img:{url:"luke_93V.jpeg",size:[1651,2514]},

    // each page can be explored in a number of slides
    slides: [
      {
        // slides are divided into fragments
        fragments: [
          {
            content: `
As you can see already, this is a much simpler page than the one before. That’s handy as it allows us a clear look at some of the most basic elements - but we will come back to all the funny clutter later, promise. By the end, you will be able to look at the very first page again and identify most of the features and also their purpose.

`
          },
          {
            content: `
One of the ways the manuscript differs from a modern printed book is the absence of paragraphs as we know them. Indents were not a thing - parchment and paper were pricy, space was too valuable! Still, the text is organised into paragraphs, only marked differently, with signs we call paramarks of parafs.

`,
            enter: function() {
              // zoom onto
              focusOn(jZones[4]);
            }

          },
          {
            content: `
iii. identify another paramark
`,
              enter:function(){focusOut(); hideZones()},
              zone:["paramark","paramark1","paramark2","paramark3"]
          },
              {
            content: `
iv. correct! you can see that two paramarks sit on the edge of the column, two inside. paragraphs could begin wherever needed, which saved space - and money! parchment was pricy.
`,
              enter:function(){moveScreen({x:0,y:0},0,0);zoomChng(-0.6);drawPolygons(findZones("cat","paramark"))},
            
          },
        ]
      },
      {
        fragments: [
          {
            content: `
i. Now that you’ve checked all the blue spots on the page, let’s turn to red! This is called rubrication. Red = ruber ... middle ages = latin. 
`,
              enter:function(){focusOut(); hideZones(); focusOn(findZones("id","rubrication1")[0])}
          },
          {
            content: `
 Click on the loooong bit of text with red underlining. (It begins with a paramark!)
`,
              enter:function(){focusOut(); hideZones()},
              zone:["rubrication2"]
          },
        ]
      }
    ]
  },
];
