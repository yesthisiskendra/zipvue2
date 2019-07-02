<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <span v-if="zipcode">
        |
        <router-link to="/zip">Temps</router-link>|
        <router-link to="/stations">Stations</router-link>|
        <router-link to="/datasets">Datasets</router-link>|
        <router-link to="/categories">Categories</router-link>
      </span>
    </div>
    <h1>Historical Weather Data</h1>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      zipcode: this.$store.state.zip || null,
      errors: []
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
