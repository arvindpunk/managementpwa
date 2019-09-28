<template>
  <v-content>
	<v-data-table
		:headers="headers"
		:items="items"
		class="elevation-1">
		<!-- <v-dialog v-model="dialog" max-width="500px">
        	<template v-slot:activator="{ on }">
            	<v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          	</template>
          	<v-card>
	            <v-card-title>
	            	<span class="headline">View</span>
	            </v-card-title>

            	<v-card-text>
	             	<v-container>
		                <v-row>
		                	<v-col cols="12" sm="6" md="4">
		                		<v-text-field v-model="editedItem.name" label="Yeet"></v-text-field>
	                		</v-col>
			                </v-col>
		                </v-row>
	            	</v-container>
	            </v-card-text>

            <v-card-actions>
				<div class="flex-grow-1"></div>
				<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
				<v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->

	</v-data-table>
  </v-content>
</template>

<script>
  /*
	Request: 
	{
		type: "GET"
		url: "https://hospital-waste-management-app.herokuapp.com/",
		path: "/data"
	}

	-- I'll add the filtering part on the front-end itself.

	Response:
	[
		{
			binID: String, 
			location: String,
			history: [
				{
					content: String,
					contentType: String Hazardous/Infectious/idk?,
					timestamp: Date/Time/String whatever
				},
				...
			]
		},
		...
	]
  */
  export default {
	props: {
	  source: String,
	},
	data: () => ({
	  drawer: null,
	  headers: [
			{ 
				text: "Bin ID",
				value: "binID" 
			},
			{ 	text: "Location",
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
  }
</script>
