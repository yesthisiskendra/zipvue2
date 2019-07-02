<template>
  <div>
    <h2>for {{ inputZip }}</h2>
    <!-- <button @click="getMoreInfo">WTF is PRCP?</button> -->
    <!-- <button @click="fetchDatasets">Get Stations</button> -->
    <div v-if="temps">
      <div v-for="data in temps" :key="data.id">
        <div class="station-name">{{ data.date.split("T")[0] }}|{{ data.datatype }}|{{ data.value }}</div>
        <!-- <div>DATES: {{ data.mindate }} | {{ data.maxdate }}</div>
        <div>DATA: {{ data.id.split(":")[0] }}</div>-->
      </div>
    </div>
    <div v-else>Coming soon!</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["zipcode"],
  data() {
    return {
      inputZip: this.zipcode ? this.zipcode : this.$store.state.zip,
      //   startdate: "1948-05-01",
      startdate: "1960-07-01",
      enddate: "1960-07-31",
      prcp: "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes/PRCP",
      datatype: "PRCP"
    };
  },
  created() {
    let payload = {
      stationId: "GHCND:USC00301896",
      startdate: this.startdate,
      enddate: this.enddate
    };
    console.log(payload);
    this.getDataFromStation(payload);
    // this.getNear(payload);
    // this.$store.dispatch('weatherQuery/fetchweatherQuery', this.id)
  },
  computed: {
    ...mapState("zipcode", ["temps"])
  },
  methods: {
    getMoreInfo() {
      this.getInfoFromDatatype(this.datatype);
    },
    // fetchDatasets() {
    //   this.getDatasets(this.zipcode);
    // },
    ...mapActions("zipcode", [
      "getHighAndLow",
      "getDataFromStation",
      "getInfoFromDatatype"
    ])
  }
};
</script>

<style scoped>
.station-button {
  padding: 10px;
}
.station-name {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}
</style>
