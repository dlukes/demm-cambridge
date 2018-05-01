Exploring medieval manuscripts
==============================

**NOTE:** There might be a live version of this running at
<https://dlukes.github.io/demm-cambridge/>.

This is a proof-of-concept app geared towards leisure learners who would like
to explore the intricacies of medieval manuscripts. The main feature is a
guided tour through the manuscript, presenting content in bitesize pieces with
occasional interactive tasks, as opposed to static text, which is the usual
presentation medium of this material for non-specialists.

The app was developed as part of the Cambridge DEMM Hackathon 2018, so two
things are in order:

- a big thank you to the organizers for making this possible!
- a fair warning to anyone who might want to dig around the code: it's
  **really** messy :) There were two of us working on it at the same time,
  stamping on each other's feet, so ugly hacks and bad practices abound. If you
  want to take this project further, I think a rewrite is in order -- use this
  prototype more as a source of inspiration for what the UI can be.

Key features
------------

If you want to turn this idea into a real project, these are the key features
we were aiming for:

- **interactivity**: the app is designed for presenting the same kind of content
  you'd more traditionally put into a presentation or article, but strives to
  make it more engaging and approachable by:
  - breaking it down into **bitesize pieces**
  - interspersing interactive elements every now and then
  - adding a **fact sheet** with some light gamification elements (facts get
    unveiled one by one as the user progresses through the content)
- in addition to this **"guided tour"** mode, user testing has shown that there
  should probably also be a **"free roaming"** mode for types of users who don't
  like to be railroaded (this will probably require additional content where
  the individual pieces of information are more standalone)
- the content follows a **three-level structure**:
  - at the topmost level, **pages** correspond to different scanned pages of
    the manuscript that the presentation will gradually go through
  - each page is discussed in a number of **slides** devoted to different
    topics of interest
  - each slide consists of a number of **fragments** (bitesize pieces of
    information, tasks etc.)
- **extensibility**: the interactive presentation engine should be cleanly
  separated from the content format, which should preferably be pure data (e.g.
  JSON), so as to allow easy authoring of additional content by external
  contributors (if less technically sophisticated people are expected to do
  this, a nice authoring tool is a must)
- **shareability**: each fragment of the presentation (see above for
  terminology) should be addressable by URL, so that links to the content can
  be shared at the most granular level possible

Setup
-----

You need [bower](https://bower.io/). Then clone or download the repository, do
a `bower install` in the repository root, run your favorite web server there
and you're good to go.

License
-------

The manuscript images are probably (?) © [Cambridge University Library][cul].

The code is distributed under the [GNU General Public License v3][gplv3].

[gplv3]: http://www.gnu.org/licenses/gpl-3.0.en.html
[cul]: http://www.lib.cam.ac.uk/
