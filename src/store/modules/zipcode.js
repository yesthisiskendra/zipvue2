import ZipCodeService from "@/services/ZipCodeService.js";
export const namespaced = true;

export const state = {
  data: [],
  stations: [],
  datasets: [],
  categories: [],
  temps: []
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
  },
  SET_TEMPS(state, temps) {
    state.temps = temps;
  }
};

export const actions = {
  getStations({ commit }, zipcode) {
    ZipCodeService.getStationsFromAPI(zipcode)
      .then(res => res.json())
      .then(data => {
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
  },
  getHighAndLow({ commit, dispatch }, payload) {
    ZipCodeService.getHighAndLowFromAPI(
      payload.zipcode,
      payload.startdate,
      payload.enddate
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (Object.getOwnPropertyNames(data).length === 0) {
          console.log("no data -- get nearby");
          //  Can I call an action from another action?
          //   getNear();
          dispatch("getNear", payload);
        } else {
          commit("SET_TEMPS", data.results);
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  },
  getNear({ commit }, payload) {
    console.log("get near", this.temps);
    ZipCodeService.getStationsFromAPI(payload.zipcode)
      .then(res => res.json())
      .then(data => {
        console.log(
          "stations",
          data.results[0].latitude,
          data.results[0].latitude + 0.2,
          data.results[0].longitude,
          data.results[0].longitude + 0.2
        );
        ZipCodeService.getNearFromAPI(
          data.results[0].latitude,
          data.results[0].longitude
        )
          .then(res => res.json())
          .then(data => {
            ZipCodeService.getDataFromNearFromAPI(
              data.results[data.results.length - 1].id,
              payload.startdate,
              payload.enddate
            )
              .then(res => res.json())
              .then(data => {
                commit("SET_TEMPS", data.results);
              });
          });
      });
  }
};

// 1. move this into Zipcode Servic
// 2. Turn above into a Promise
