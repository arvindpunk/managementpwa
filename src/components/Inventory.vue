<template>
  <v-content class="ma-3">
    <v-card>
      <v-card-title>Warnings</v-card-title>
    <v-text-field class="ma-3"
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Warning Type</th>
          <th class="text-left">Object</th>
          <th class="text-left">Disposed By</th>
          <th class="text-left">Time</th>
        </tr>
        </thead>
        <tbody v-for="item in items" :key="item.id">
        <tr>
          <td>{{ (item.warningType == 'WRONG_BIN')?"Wrong Bin":"Not disposed correctly" }}</td>
          <td>{{ item.field1.item?item.field1.item:'Syringe' }}</td>
          <td>{{ item.field2.name }}</td>
          <td>{{ Date(parseInt((item.warningType == 'WRONG_BIN')?item.field1.timestamp:item.field1.dispensedTime) * 1000) }}</td>
        </tr>
        </tbody>
      </template>
      </v-simple-table>
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
    url: currUrl + 'api/admin/all-warning',
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
  isLoading: true,
  // persons: [],
  headers: [
    { 
    text: "Warning Type",
    value: "warningType" ,
    align: 'left'
    },
    { 
    text: "Object",
    value: "object"
    },
    { 
    text: "Time",
    value: "timestamp"
    }
  ],
  items: [ ],
  // headersPersons: [
  //   {
  //     text: "ID",
  //     value: "id",
  //     align: 'left'
  //   },
  //   {
  //     text: "Name",
  //     value: "name",
  //   }
  // ]
  }),
  computed:  {
  searcheditems: function() {
    let filtered = this.items.filter((item) => {
      return item.field2.name.toLowerCase().includes(this.search.toLowerCase());
    });
  },
  getDateFromUnix: function() {
    return 0;
  }
  },
  methods: {
  // clickList: function(item) {
  //   let currUrl = ''
  //   currUrl = 'https://hospital-waste-management-app.herokuapp.com/'
  //   axios({
  //     method: 'get',
  //     url: currUrl + 'api/admin/location/' + item.id,
  //     crossdomain: true,
  //     withCredentials: true
  //   })
  //   .then(response => {
  //     this.selectedItem = item;
  //     console.log(item.locationDesc);
  //     this.persons = response.data.data.deviceInfoVoList;
  //     console.log(this.persons);
  //     this.popup = true;
  //   })
  //   .catch(error => {
  //     // console.log('ERROR: ' + error);
  //     this.$router.push('/');
  //   });
  // }
  }
 }
</script>
