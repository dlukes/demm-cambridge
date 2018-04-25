const pages = [
  // a presentation consists of pages, corresponding to the scanned pages of a manuscript
  {
    // each page can be explored in a number of slides
    slides: [
      {
        // slides are divided into fragments
        fragments: [
          {
            content: `
Hey there!
`
          },
          {
            content: `
Hey there number two! Identify the rubrication.
`,
            enter: function() {
              // zoom onto
              focusOn(jZones[0]);
            },
            zone: "rubrication1"
          },
          {
            content: `
This is a really nice interactive app for exploring manuscripts.
`
          },
        ]
      },
      {
        fragments: [
          {
            content: `
Feel free to poke around :)
`
          },
          {
            content: `
Really, do!
`
          },
        ]
      }
    ]
  },
];
