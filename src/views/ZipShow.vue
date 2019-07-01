<template>
  <div>
    <h2>for {{ zipcode }}</h2>
    <button @click="fetchDatasets">Get Stations</button>
    <div v-if="stations">
      <div v-for="station in stations" :key="station.id">
        <div class="station-name">{{ station.name }}</div>
        <div>DATES: {{ station.mindate }} | {{ station.maxdate }}</div>
        <div>DATA: {{ station.id.split(":")[0] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["zipcode"],
  created() {
    // this.$store.dispatch('weatherQuery/fetchweatherQuery', this.id)
  },
  computed: {
    ...mapState("zipcode", ["stations"])
  },
  methods: {
    fetchDatasets() {
      this.getDatasets(this.zipcode);
    },
    ...mapActions("zipcode", ["getDatasets"])
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
