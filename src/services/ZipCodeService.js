export default {
  getStationsFromAPI(zipcode) {
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?locationid=ZIP:" +
      zipcode;
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getDatasetsFromAPI(zipcode) {
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?locationid=ZIP:" +
      zipcode;
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getCategoriesFromAPI(zipcode) {
    console.log("getting here cat from api");
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories?locationid=ZIP:" +
      zipcode;
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getHighAndLowFromAPI(zip, start, end) {
    console.log("GET HIGH AND LOW", zip, start, end);
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=ZIP:" +
      zip +
      "&startdate=" +
      start +
      "&enddate=" +
      end +
      "&limit=1000&units=standard&datatypeid=TMAX&datatypeid=TMIN";
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getNearFromAPI(lat, long) {
    let lat2 = lat + 0.5;
    let long2 = long + 0.5;
    // Get lat and long
    // Increase lat and long
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/stations?datasetid=GSOM&extent=" +
      lat +
      "," +
      long +
      "," +
      lat2 +
      "," +
      long2;
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getDataFromNearFromAPI(stationId, start, end) {
    // GHCND:USR0000COPA
    console.log("station id", stationId);
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&stationid=" +
      stationId +
      "&startdate=" +
      start +
      "&enddate=" +
      end +
      "&limit=1000";
    // "&limit=1000&units=standard&datatypeid=TMAX&datatypeid=TMIN";
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  },
  getInfoFromDatatype(datatype) {
    // GHCND:USR0000COPA
    // console.log("station id", stationId);
    console.log("getting here");
    const url =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes/" + datatype;
    return fetch(url, {
      headers: { token: "lcgEHOgrtMIIEUdSQGVKZUQYUJHvGnvt" }
    });
  }
};
