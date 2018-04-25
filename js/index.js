const pos_feedback = new Set([
  "That's it!",
  "Well done!",
  "Good job!",
  "Way to go!",
]);
const neg_feedback = new Set([
  "Try again!",
  "Good guess, but that's not quite it!",
  "Keep trying!",
  "Better luck next time!",
]);

// const NextButton = Vue.component("button-next", {
//   template: `
// <button @click="goToNext" id="btn-next" type="button" class="btn btn-sm btn-outline-secondary">Next >></button>
// `,
//   props: ["fragment"],
//   methods: {
//     goToNext() {
//       this.$router.push({ path: "/", params: { page: 0, slide: 0, fragment: this.fragment }});
//       console.log("going to next");
//       console.log(this.fragment);
//     }
//   }
// });

function hasNext(coll, idx) {
  return idx + 1 < coll.length;
}

const Presentation = Vue.component("presentation", {
  template: `
<div>
<p v-for="f in fragments">{{ f }}</p>
<router-link :to="{ name: 'main', params: { page: next_page, slide: next_slide, fragment: next_fragment }}">Next</router-link>
</div>
`,
  data() {
    return {
      // currently displayed fragments
      fragments: [],
      next_page: 0,
      next_slide: 0,
      next_fragment: 0
    };
  },
  methods: {
    updateFragment(params) {
      let page = parseInt(params.page);
      let slide = parseInt(params.slide);
      let fragment = parseInt(params.fragment);
      let slides = pages[page].slides;
      let fragments = slides[slide].fragments;
      let display_fragments = fragments.slice(0, fragment + 1).map(e => e.content);
      let last_fragment = display_fragments[fragment];
      if (last_fragment.hasOwnProperty("enter")) {
        last_fragment.enter();
      }
      let canvas = $("#msCanvas");
      if (last_fragment.hasOwnProperty("next")) {
        console.log("ADDING CANVAS CLICK HANDLER");
        canvas.click(last_fragment.next);
      } else {
        // TODO: remove possible existing click handlers on canvas
        // TODO: hide next router-link
      }
      this.fragments = display_fragments;
      // set up link to next fragment
      if (hasNext(fragments, fragment)) {
        this.next_fragment = fragment + 1;
      } else if (hasNext(slides, slide)) {
        this.next_slide = slide + 1;
        this.next_fragment = 0;
      } else if (hasNext(pages, page)) {
        this.next_page = page + 1;
        this.next_slide = 0;
        this.next_fragment = 0;
      }
    }
  },
  created() {
    let params = this.$route.params;
    this.updateFragment(params);
  },
  beforeRouteUpdate(to, from, next) {
    let params = to.params;
    this.updateFragment(params);
    next();
  }
});

const routes = [
  { name: "main", path: "/:page/:slide/:fragment", component: Presentation },
  { path: "/", redirect: "/0/0/0" }
];
const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  router
});
