import Vue from "vue";
import Vuex from "vuex";
import * as zipcode from "@/store/modules/zipcode.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    zipcode
  },
  state: {
    author: "Kendra",
    categories: [
      "Michael Scott",
      "Dwight",
      "Phyllis",
      "Angela",
      "Kevin",
      "Stanley"
    ]
  },
  mutations: {},
  actions: {}
});
