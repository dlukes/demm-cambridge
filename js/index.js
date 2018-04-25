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

const Presentation = Vue.component("presentation", {
  template: `
<div>
<p v-for="f in fragments">{{ f }}</p>
</div>
`,
  data() {
    return {
      // currently displayed fragments
      fragments: []
    };
  },
  methods: {
    setFragments(params, data) {
      let page = params.page;
      let slide = params.slide;
      let fragment = params.fragment;
      let new_fragments = pages[page].slides[slide].fragments.slice(0, fragment);
      this.fragments = new_fragments;
    }
  },
  created() {
    let params = this.$route.params;
    this.setFragments(params, this);
  },
  beforeRouteUpdate(to, from, next) {
    let params = to.params;
    this.setFragments(params, this);
    next();
  }
});

const routes = [
  { path: "/:page/:slide/:fragment", component: Presentation },
  { path: "/", redirect: "/0/0/1" }
];
const router = new VueRouter({
  routes
});

const app = new Vue({
  el: "#app",
  router
});
