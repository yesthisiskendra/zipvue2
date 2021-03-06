import ZipCodeService from "@/services/ZipCodeService.js";
export const namespaced = true;

export const state = {
  data: [],
  stations: [],
  datasets: [],
  categories: [],
  temps: [],
  startdate: "",
  enddate: ""
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
  },
  SET_DATES(state, payload) {
    state.startdate = payload.enddate;
    state.enddate = payload.enddate;
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
  getNear({ commit, dispatch }, payload) {
    console.log("get near", this.temps);
    commit("SET_DATES", payload);
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
            dispatch("checkDateRange", data.results);
            console.log("this many near zip:", data.results);
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
  },
  getDataFromStation({ commit }, payload) {
    ZipCodeService.getDataFromNearFromAPI(
      payload.stationId,
      payload.startdate,
      payload.enddate
    )
      .then(res => res.json())
      .then(data => {
        // console.log("jamiedata", data.results);
        commit("SET_TEMPS", data.results);
      });
  },
  getInfoFromDatatype({ commit }, datatype) {
    ZipCodeService.getInfoFromDatatype(datatype)
      .then(res => res.json())
      .then(data => {
        console.log("jamiedata", data);
        // commit("SET_TEMPS", data.results);
      });
  },
  checkDateRange({ commit, state }, results) {
    results.forEach(result => {
      console.log(
        result.mindate,
        result.maxdate,
        state.startdate,
        state.enddate
      );
    });
  }
};

// 1. move this into Zipcode Servic
// 2. Turn above into a Promise
