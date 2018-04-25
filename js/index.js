const pos_feedback = [
  "That's it!",
  "Well done!",
  "Good job!",
  "Way to go!",
];
const neg_feedback = [
  "Try again!",
  "Good guess, but that's not quite it!",
  "Keep trying!",
  "Better luck next time!",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
<p :class="feedback_class">{{ feedback_message }}</p>
<router-link :class="next_link_class" :to="{ name: 'main', params: { page: next_page, slide: next_slide, fragment: next_fragment }}">Next</router-link>
</div>
`,
  data() {
    return {
      // currently displayed fragments
      fragments: [],
      next_page: 0,
      next_slide: 0,
      next_fragment: 0,
      next_link_class: "",
      feedback_message: "",
      feedback_class: ""
    };
  },
  methods: {
    updateFragment(params) {
      // hideZones();
      let page = parseInt(params.page);
      loadImg(pages[page].img);
      let slide = parseInt(params.slide);
      let fragment = parseInt(params.fragment);
      let slides = pages[page].slides;
      let fragments = slides[slide].fragments;
      let display_fragments = fragments.slice(0, fragment + 1).map(e => e.content);
      last_fragment = fragments[fragment];
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
      if (last_fragment.hasOwnProperty("enter")) {
        console.log("Running enter function");
        last_fragment.enter();
      }
      canvas = $("#msCanvas");
      if (last_fragment.hasOwnProperty("zones")) {
        console.log("ADDING CANVAS CLICK HANDLER");
        this.next_link_class = "d-none";
        canvas.click(e => {
          poly = locatePolygon(e);
          if (poly !== undefined && last_fragment.zones.includes(poly.id)) {
            drawPolygon(poly);
            this.feedback_message = getRandom(pos_feedback);
            this.feedback_class = "text-success";
            this.next_link_class = "";
          } else {
            this.feedback_message = getRandom(neg_feedback);
            this.feedback_class = "text-warning";
          }
        });
      } else {
        canvas.click = undefined;
      }
      this.fragments = display_fragments;
      this.feedback_message = "";
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
  el: "#sidebar",
  router
});
