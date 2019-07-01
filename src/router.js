import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ZipShow from "./views/ZipShow.vue";
import ZipStations from "./views/ZipStations.vue";
import ZipDatasets from "./views/ZipDatasets.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/zip/:zipcode",
      name: "zipcode-show",
      component: ZipShow,
      props: true
    },
    {
      path: "/stations/:zipcode",
      name: "zipcode-stations",
      component: ZipStations,
      props: true
    },
    {
      path: "/datasets/:zipcode",
      name: "zipcode-datasets",
      component: ZipDatasets,
      props: true
    }
  ]
});
