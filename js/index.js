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

function hasNext(coll, idx) {
  return idx + 1 < coll.length;
}

function scrollSlide() {
  let sidebarMiddle = document.getElementById("sidebar-middle");
  $(sidebarMiddle).animate({ scrollTop: sidebarMiddle.scrollHeight }, 500);
}

const Navigation = Vue.component("navigation", {
  template: `
<div>
<router-link class="prev-page" v-if="page > 0" :to="{ name: 'main', params: { page: page-1, slide: 0, fragment: 0 }}">« Previous page</router-link>
<div class="btn-group align-self-center" role="group">
<router-link :class="{ active: idx === slide }" class="btn btn-outline-secondary" v-for="(s, idx) in pages[page].slides" :to="{ name: 'main', params: { page: page, slide: idx, fragment: 0 }}">{{ idx + 1}}</router-link>
</div>
<router-link class="next-page" v-if="hasNext(pages, page)" :to="{ name: 'main', params: { page: page+1, slide: 0, fragment: 0 }}">Next page »</router-link>
</div>
`,
  data() {
    return {
      page: 0,
      slide: 0,
      pages: pages
    };
  },
  methods: {
    updateNavigation() {
      this.page = parseInt(this.$route.params.page);
      this.slide = parseInt(this.$route.params.slide);
    },
    hasNext: hasNext
  },
  mounted() {
    this.$root.$on("update-navigation", () => {
      this.updateNavigation();
    });
  }
});

const Presentation = Vue.component("presentation", {
  template: `
<div>
<transition-group name="fragments" tag="div">
<p v-for="(f, idx) in fragments" v-bind:key="idx" v-html="f"></p>
</transition-group>
<p v-if="feedback_message" :class="feedback_class">{{ feedback_message }}</p>
<router-link v-if="show_next" :to="{ name: 'main', params: { page: next_page, slide: next_slide, fragment: next_fragment }}">{{ next_text }}</router-link>
</div>
`,
  data() {
    return {
      // currently displayed fragments
      fragments: [],
      show_next: true,
      next_page: 0,
      next_slide: 0,
      next_fragment: 0,
      next_text: "",
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
      let last_fragment = fragments[fragment];
      // set up link to next fragment
      if (hasNext(fragments, fragment)) {
        this.next_fragment = fragment + 1;
        this.next_text = "More";
      } else if (hasNext(slides, slide)) {
        this.next_slide = slide + 1;
        this.next_fragment = 0;
        this.next_text = "Next slide";
      } else if (hasNext(pages, page)) {
        this.next_page = page + 1;
        this.next_slide = 0;
        this.next_fragment = 0;
        this.next_text = "Next manuscript page »";
      }
      if (last_fragment.hasOwnProperty("enter")) {
        last_fragment.enter();
      }
      let canvas = $("#msCanvas");
      if (last_fragment.hasOwnProperty("zones")) {
        this.show_next = false;
        display_fragments[fragment] = "<b>TASK: " + last_fragment.content + "</b>";
        canvas.click(e => {
          let poly = locatePolygon(e);
          if (poly !== undefined && last_fragment.zones.includes(poly.id)) {
            drawPolygon(poly);
            this.feedback_message = getRandom(pos_feedback);
            this.feedback_class = "text-success";
            this.show_next = true;
          } else {
            this.feedback_message = getRandom(neg_feedback);
            this.feedback_class = "text-warning";
          }
        });
      } else {
        // remove previously attached event listener
        canvas.off();
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
  },
  updated() {
    scrollSlide();
    this.$root.$emit("update-navigation");
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

$(document).ready(() => {
  scrollSlide();
});
