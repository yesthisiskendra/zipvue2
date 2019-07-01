<template>
  <div class="about">
    <h3>An Experiment with Vue</h3>
    <h2>
      By
      <a :href="githublink" target="_blank">{{ author }}</a>
    </h2>
    <h6>With help from</h6>
    <div v-for="cat in categories" :key="cat">{{ cat }}</div>
    <a :href="kittylink" target="_blank">
      <h6>of the Michael Scott Kitten Co</h6>
    </a>
    <div>. . .</div>
    <h4>See the Experiment in React:</h4>
    <h5>
      <a :href="reactapp" target="_blank">APP</a> |
      <a :href="reactcode" target="_blank">CODE</a> |
      <a :href="prototype" target="_blank">V1</a>
    </h5>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      githublink: "https://github.com/yesthisiskendra?tab=repositories",
      kittylink: "https://www.instagram.com/michaelscottkittenco/",
      reactapp:
        "http://wereacttotheweather.s3-website-us-west-2.amazonaws.com/",
      reactcode: "https://github.com/yesthisiskendra/wereacttoweather",
      prototype: "http://getthegist.s3-website-us-west-2.amazonaws.com/91103"
    };
  },
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(["categories", "author"])
  }
};
</script>

<style scoped></style>
