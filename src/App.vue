<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    Login,
  },
  data: () => ({

  })
};
</script>

<style scoped>
.fade-leave-active {
    transition: opacity .12s
}
.fade-enter-active {
    transition: opacity .12s;
    transition-delay: 0.13s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
