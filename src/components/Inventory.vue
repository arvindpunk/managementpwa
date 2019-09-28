<template>
  <v-content>
    <h1>Inventory</h1>
  </v-content>
</template>

<script>
  export default {
  	name: "Inventory",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>