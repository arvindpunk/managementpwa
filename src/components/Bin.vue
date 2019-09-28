<template>
  <v-content class="ma-3">
    <v-card>
      <v-card-title>Bin Information</v-card-title>
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
