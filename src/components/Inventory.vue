<template>
  <v-content>
    <div class="pa-3">
      <h1>Inventory - Work In Progress</h1>
    </div>
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