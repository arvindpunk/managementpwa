<template>
  <v-content>
    <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    >

    </v-data-table>
  </v-content>
</template>

<script>
  import axios from 'axios'
  export default {
  props: {
    source: String,
  },
  created () {
    this.initialize()
  },
  data: () => ({
    drawer: null,
    headers: [
      { 
        text: "Bin ID",
        value: "binID" 
      },
      {   text: "Location",
        value: "location"
      }
    ],
    items: [
    {
      binID: "a6g23gsd",
      location: "FF-13",
      history: [
        {
          content: "Syringe",
          contentType: "Reusable",
          timestamp: "28 Sep 2018 20:55:42"
        }
      ]
    }
    ]
  }),
  methods: {
      initialize () {
        axios.post('https://hospital-waste-management-app.herokuapp.com/login',
          {
            username: "adminusername",
            password: "adminpassword"
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });


        // axios.get('https://hospital-waste-management-app.herokuapp.com/admin/user/all-scores-sorted')
        // .then(response => {
        //   console.log(response);
        // })
        // .catch(error => {
        //   console.log(error);
        // });

      }
    }
  }
</script>
