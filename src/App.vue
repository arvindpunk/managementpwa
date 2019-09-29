<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      src="http://papers.co/wallpaper/papers.co-sc96-rainbow-color-cloud-blur-36-3840x2400-4k-wallpaper.jpg"
      app
    >
      <v-list>
        <v-list-item>
          <v-img src="./assets/pinkbluesmall.png"></v-img>
        </v-list-item>
        <v-list-item>
        <v-list-item-title class="title white--text">
            Swachh+
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <!-- <v-list-item @click="$router.push('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item-group v-model="item" color="white">
          <v-list-item 
            v-for="(item, i) in items"
            :key="i"
            :to="item.path">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Management App</v-toolbar-title>
    </v-app-bar>
    <transition name="fade">
      <router-view @loginSuccesful="loginSuccess">
      </router-view>
    </transition>
    <v-snackbar
      v-model="snackbar"
      :timeout=1500
      :bottom=true
    >
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',
  data: () => ({
    isLoggedIn: false,
    drawer: null,
    item: 3,
    snackbar: false,
    text: 'Login failed.',
    items: [
      {
        title: "Bin Data",
        icon: "mdi-delete",
        path: "/bin"
      },
      {
        title: "Staff Data",
        icon: "mdi-folder-account",
        path: "/staff"
      },
      {
        title: "Inventory",
        icon: "mdi-buffer",
        path: "/inventory"
      }
    ]
  }),
  computed: {
    isDisabled() {
      return !this.isLoggedIn;
    }
  },
  methods: {
    loginSuccess: function() {
      this.isLoggedIn = true;
      this.text = 'Login succesful.';
      this.snackbar = true;
    },
    loginFailed: function() {
      this.snackbar = true;
    }
  }
};
</script>

<!-- SOMEHOW FIX THIS TRANSITION CSS HELP -->

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
