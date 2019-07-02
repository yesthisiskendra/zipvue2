<template>
  <div>
    <h2>for {{ inputZip }}</h2>
    <!-- <button @click="fetchDatasets">Get Stations</button> -->
    <div v-if="temps">
      <div v-for="data in temps" :key="data.id">
        <div class="station-name">{{ data.value }}</div>
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
      startdate: "2018-06-01",
      enddate: "2018-06-30"
    };
  },
  created() {
    let payload = {
      zipcode: this.inputZip,
      startdate: this.startdate,
      enddate: this.enddate
    };
    this.getHighAndLow(payload);
    // this.getNear(payload);
    // this.$store.dispatch('weatherQuery/fetchweatherQuery', this.id)
  },
  computed: {
    ...mapState("zipcode", ["temps"])
  },
  methods: {
    // fetchDatasets() {
    //   this.getDatasets(this.zipcode);
    // },
    ...mapActions("zipcode", ["getHighAndLow", "getNear"])
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
