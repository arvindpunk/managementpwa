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
    class="elevation-1"
    >

    </v-data-table>
  </v-card>
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
      url: currUrl + 'user/score',
      crossdomain: true
    })
    .then(response => {
      console.log('RESPONSE: ' + response.data);
    })
    .catch(error => {
      console.log('ERROR: ' + error);
    });
  },
  data: () => ({
    drawer: null,
    headers: [
      { 
        text: "Staff ID",
        value: "staffid" ,
        align: 'left'
      },
      { 
        text: "Awareness Score",
        value: "score"
      }
    ],
    items: [
    {
      staffid: "Wenxuan",
      score: "101"
    },
    {
      staffid: "Utkarsh",
      score: "70"
    },
    {
      staffid: "Wintersea",
      score: "95"
    }
    ]
  })
  }
</script>
