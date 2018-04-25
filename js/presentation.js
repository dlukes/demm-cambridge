const zones = {
  z1: {
    points: [{"x":464,"y":679},{"x":736,"y":679},{"x":733,"y":729},{"x":470,"y":739}]
  }
};
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
Hey there number two!
`,
            enter: function() {
              // zoom onto
              focusOn(zones.z1);
            },
            next: function(event) {
              // custom next action (e.g. locate an element in manuscript)
              locatePolygon(zones.z1, event, focusOn);
              console.log(event);
            }
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
