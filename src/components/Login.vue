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
                <v-toolbar-title>Management</v-toolbar-title>
                
               
              </v-toolbar>
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
        console.log(this.user);
        console.log(this.pass);

        let formData = new FormData();
        formData.set('username', this.user);
        formData.set('password', this.pass);

        let currUrl = ''
        currUrl = 'https://hospital-waste-management-app.herokuapp.com/'
        axios({
          method: 'post',
          url: currUrl + 'login',
          data: formData,
          crossdomain: true,
          withCredentials: true
        })
        .then(response => {
          console.log(response.data);
          console.log(response.headers);
          console.log(response.statusText);
          // console.log(response.headers['set-cookie']);
          console.log(response.config);
          // if (response.status === 200 && 'token' in response.data) {
          //   this.$session.start()
          //   this.$session.set('jwt', response.body.token)
          //   Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
          this.$router.push('/staff');
          //   //disable login
          // }
        })
        .catch(error => {
          console.log('ERROR: ' + error);
          //Show login error message here in UI
        })

        // request.post(currUrl + 'login', 
        //   {
        //     form: {
        //       username: this.user,
        //       password: this.pass
        //     }
        //   }, (error, res, body) => {
        //     if (error) {
        //       console.error(error)
        //       return
        //     }
        //     console.log('statusCode: ${res.statusCode}')
        //     console.log(body)
        //   });
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
