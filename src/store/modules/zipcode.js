import ZipCodeService from "@/services/ZipCodeService.js";
export const namespaced = true;

export const state = {
  data: [],
  stations: [],
  datasets: [],
  categories: []
};

export const mutations = {
  SET_STATIONS(state, stations) {
    state.stations = stations;
  },
  SET_DATASETS(state, datasets) {
    state.datasets = datasets;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  }
};

export const actions = {
  getStations({ commit }, zipcode) {
    ZipCodeService.getStationsFromAPI(zipcode)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        commit("SET_STATIONS", data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  },
  getDatasets({ commit }, zipcode) {
    ZipCodeService.getDatasetsFromAPI(zipcode)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        commit("SET_DATASETS", data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  },
  getCategories({ commit }, zipcode) {
    ZipCodeService.getCategoriesFromAPI(zipcode)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        commit("SET_CATEGORIES", data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }
};

// 1. move this into Zipcode Servic
// 2. Turn above into a Promise
