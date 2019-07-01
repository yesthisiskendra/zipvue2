<template>
  <div>
    <h2>for {{ zipcode }}</h2>
    <div v-if="categories">
      <div v-for="data in categories" :key="data.id">
        <div class="station-name">{{ data.name }}</div>
        <div>ID: {{ data.id.split(":")[0] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["zipcode"],
  created() {
    this.getCategories(this.zipcode);
    // this.$store.dispatch('weatherQuery/fetchweatherQuery', this.id)
  },
  computed: {
    ...mapState("zipcode", ["categories"])
  },
  methods: {
    ...mapActions("zipcode", ["getCategories"])
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
