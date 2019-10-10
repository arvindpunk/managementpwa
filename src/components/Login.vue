<template>
  <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>Smart Food Distribution</v-toolbar-title>
                
               
              </v-toolbar>
              <!-- <v-row
              align="center"
              justify="center"
              > -->
                <!-- <v-img src="../assets/textsmall.png" :max-height=256 :max-width=256></v-img> -->
              <!-- </v-row> -->
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="user"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="pass"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn class="flex-grow-1" color="indigo white--text" v-on:click="tryLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
      pass: null
    }),
    methods: {
      tryLogin: function() {
        // console.log(user)
        // console.log(pass)
        if (this.user == 'admin' && this.pass == 'password') {
          this.$router.push('/dashboard')
        }
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
