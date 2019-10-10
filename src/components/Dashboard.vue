<template>
  <v-content>
    <v-tabs fixed-tabs v-model='tab'>
    <v-tab>Request</v-tab>
    <v-tab>Robot</v-tab>
  </v-tabs>
  </v-content>
</template>

<script>
  import axios from 'axios'
  // var request = require('request');

  export default {
    name: 'Login',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      user: null,
      pass: null,
      tab: null
    }),
    methods: {
      tryLogin: function() {

        this.$router.push('/dashboard')
        // let formData = new FormData();
        // formData.set('username', this.user);
        // formData.set('password', this.pass);

        // let currUrl = ''
        // currUrl = 'https://hospital-waste-management-app.herokuapp.com/'
        // axios({
        //   method: 'post',
        //   url: currUrl + 'login',
        //   data: formData,
        //   crossdomain: true,
        //   withCredentials: true 
        // })
        // .then(response => {
        //   if (response.status === 200 || response.status === 201) {
        //     this.$emit('loginSuccesful');
        //     this.$router.push('/bin');
        //   }
        //   // disable login
        // })
        // .catch(error => {
        //   console.log('ERROR: ' + error);
        //   this.$emit('loginFailed');
        //   //Show login error message here in UI
        // })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
