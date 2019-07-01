import ZipCodeService from "@/services/ZipCodeService.js";
export const namespaced = true;

export const state = {
  data: [],
  stations: []
};

export const mutations = {
  SET_STATIONS(state, stations) {
    state.stations = stations.map(station => station);
  }
};

export const actions = {
  getDatasets({ commit }, zipcode) {
    ZipCodeService.getDatasetsFromAPI(zipcode)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        commit("SET_STATIONS", data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
};

// 1. move this into Zipcode Servic
// 2. Turn above into a Promise
