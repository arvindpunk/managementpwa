<template>
  <v-content>
    <v-tabs fixed-tabs v-model='tab'>
    <v-tab>Request</v-tab>
    <v-tab>Activity Tracker</v-tab>
    <v-tab-item>
      <v-row>
        <v-col align="center" justify="center">
        <v-time-picker color="indigo" v-model="picker"></v-time-picker>
        </v-col>
      </v-row>
    </v-tab-item>
    <v-tab-item>
      <v-row>
        <v-col justify="center">
        <v-timeline>
          <v-timeline-item color="green lighten-2">Robot informed!</v-timeline-item>
          <v-timeline-item class="text-right" small>Robot traversing...</v-timeline-item>
          <v-timeline-item small>Reaching restaurant.</v-timeline-item>
          <v-timeline-item class="text-right" small>Drop-off.</v-timeline-item>
          <v-timeline-item small>NGO arrived.</v-timeline-item>
          <v-timeline-item class="text-right" small>Food picked up!</v-timeline-item>
        </v-timeline>
      </v-col>
      </v-row>
    </v-tab-item>
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
      tab: null,
      picker: null,
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
