<template>
  <v-content class="ma-3">
	<v-card>
	  <v-card-title>Location Information</v-card-title>
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
			  <th class="text-left">ID</th>
			  <th class="text-left">Location ID</th>
			  <th class="text-left">Location Description</th>
			</tr>
		  </thead>
		  <tbody v-for="item in items" :key="item.id" v-on:click="clickList(item)">
			<tr class="clickable-row">
			  <td>{{ item.id }}</td>
			  <td>{{ item.locationNo }}</td>
			  <td>{{ item.locationDesc }}</td>
			</tr>
		  </tbody>
		</template>
	  </v-simple-table>
	</v-card>

	<v-dialog :value="popup" v-model="popup" max-width="1000px" name="inner">
		<v-card>
			<v-toolbar color="indigo" dark flat>
                <v-toolbar-title>{{ selectedItem.locationNo }}</v-toolbar-title>
            </v-toolbar>
			<v-card-title>{{ selectedItem.locationDesc }}</v-card-title>
			<!-- <v-card-text>{{ selectedItem.locationDesc }}</v-card-text> -->
		<v-expansion-panels>
			<v-expansion-panel v-for="person in persons" :key="person.responsiblePerson.id">
				<v-expansion-panel-header>
					{{ person.responsiblePerson.name }}
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-list>
						<v-list-item-group color="primary">
						<v-list-item 
							v-for="(transaction, t) in person.deviceTransactionRecords"
							:key="t"
							>
						<v-list-item-content>
						  <v-list-item-title>{{ (transaction.txType == "WASTE_SUD")?"Single-use device":"Generic waste" }}</v-list-item-title>
						  <v-list-item-subtitle>{{ Date(parseInt(transaction.timestamp) * 1000) }}</v-list-item-subtitle>
						</v-list-item-content>
						</v-list-item>
						</v-list-item-group>
					</v-list>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		</v-card>
	</v-dialog>
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
	  url: currUrl + 'api/admin/all-locations',
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
	selectedItem: { id: "0", locationNo: "1", locationDesc: "2"},
	persons: [],
	popup: false,
	headers: [
	  { 
		text: "ID",
		value: "id" ,
		align: 'left'
	  },
	  { 
		text: "Location Number",
		value: "locationNo"
	  },
	  { 
		text: "Location Description",
		value: "locationDesc"
	  }
	],
	items: [ ],
	headersPersons: [
		{
			text: "ID",
			value: "id",
			align: 'left'
		},
		{
			text: "Name",
			value: "name",
		}
	]
  }),
  computed:  {
	searcheditems: function() {
		let filtered = this.items.filter((item) => {
			return item.locationDesc.toLowerCase().includes(this.search.toLowerCase());
		});
	}
  },
  methods: {
	clickList: function(item) {
		let currUrl = ''
		currUrl = 'https://hospital-waste-management-app.herokuapp.com/'
		axios({
		  method: 'get',
		  url: currUrl + 'api/admin/location/' + item.id,
		  crossdomain: true,
		  withCredentials: true
		})
		.then(response => {
			this.selectedItem = item;
			console.log(item.locationDesc);
			this.persons = response.data.data.deviceInfoVoList;
			console.log(this.persons);
			this.popup = true;
		})
		.catch(error => {
		  // console.log('ERROR: ' + error);
		  this.$router.push('/');
		});
	}
  }
 }
</script>
