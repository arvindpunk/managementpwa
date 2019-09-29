<template>
  <v-content class="ma-3">
    <v-card>
      <v-card-title>Staff Information</v-card-title>
    <v-text-field class="ma-3"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    :loading="isLoading"
    loading-text="Fetching data..."
    class="elevation-1"
    >

    </v-data-table>
  </v-card>
  <!-- <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          fab
          bottom
          right
          dark
          v-on="on"
        >
          +
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
</v-content>

</template>

<script>
  import axios from 'axios'
  export default {
  props: {
    source: String,
  },
  mounted () {
    let currUrl = ''
    currUrl = 'https://hospital-waste-management-app.herokuapp.com/'
    axios({
      method: 'get',
      url: currUrl + 'admin/user/all-scores',
      crossdomain: true,
      withCredentials: true
    })
    .then(response => {
      this.items = response.data.data;
      this.isLoading = false;
    })
    .catch(error => {
      // console.log('ERROR: ' + error);
      this.$router.push('/');
    });
  },
  data: () => ({
    drawer: null,
    search: '',
    dialog: false,
    isLoading: true,
    headers: [
      { 
        text: "Username",
        value: "username" ,
        align: 'left'
      },
      { 
        text: "Name",
        value: "name"
      },
      { 
        text: "Awareness Score",
        value: "score"
      }
    ],
    items: [ ]
  })
  }
</script>
