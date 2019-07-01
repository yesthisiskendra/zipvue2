import Vue from "vue";
import Vuex from "vuex";
import * as zipcode from "@/store/modules/zipcode.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    zipcode
  },
  state: {
    zip: 0,
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
  mutations: {
    SET_ZIP(state, zip) {
      state.zip = zip;
      state.author = "Colin";
    }
  },
  actions: {
    submitZip({ commit }, zip) {
      console.log("getting here!", zip);
      commit("SET_ZIP", zip);
    }
  }
});
