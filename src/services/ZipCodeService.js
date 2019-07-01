export default {
  getStationsFromAPI(zipcode) {
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid=ZIP:" +
      zipcode;
    //   '91103'
    // this.state.zipcode
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getDatasetsFromAPI(zipcode) {
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?locationid=ZIP:" +
      zipcode;
    // this.state.zipcode
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
    // return apiWeatherClient.get('')
  },
  getCategoriesFromAPI(zipcode) {
    console.log("getting here cat from api");
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories?locationid=ZIP:" +
      zipcode;
    // this.state.zipcode
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
    // return apiWeatherClient.get('')
  },
  getHighAndLow(zip, start, end) {
    // console.log("GET HIGH AND LOW");
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:" +
      zip +
      "&startdate=" +
      start +
      "&enddate=" +
      end +
      "&limit=100&units=standard&datatypeid=TMAX&datatypeid=TMIN";
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  }
};
