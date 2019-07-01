<template>
      <form class="review-form" @submit.prevent="onSubmit">
          <p v-if="errors.length">Please correct the following error(s):
              <ul>
                  <li v-for="error in errors">{{ error }}</li>
              </ul>
          </p>
          <p>
              <!-- <label for="zipcode">Zipcode:</label> -->
              <input id="zipcode" v-model="zipcode" placeholder="zip code">
          </p>
          
          <p>
            <input type="submit" value="Submit">  
          </p>  
  
      </form>
</template>

<script>
export default {
  data() {
    return {
      zipcode: null,
      errors: []
    };
  },
  methods: {
    onSubmit(){
      window.location.href = "/zip/" + this.zipcode;
    }
  }
};
</script>
