<template>
  <div>
    <h2>for {{ zipcode }}</h2>
    <div v-if="datasets">
      <div v-for="dataset in datasets" :key="dataset.id">
        <div class="station-name">{{ dataset.name }}</div>
        <div>DATES: {{ dataset.mindate }} | {{ dataset.maxdate }}</div>
        <div>DATA: {{ dataset.id.split(":")[0] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["zipcode"],
  created() {
    this.getDatasets(this.zipcode);
    // this.$store.dispatch('weatherQuery/fetchweatherQuery', this.id)
  },
  computed: {
    ...mapState("zipcode", ["datasets"])
  },
  methods: {
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
