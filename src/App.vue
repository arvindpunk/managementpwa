<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
    >
      <v-list dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item 
            v-for="(item, i) in items"
            :key="i"
            @click="$router.push(item.path)">
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
      <v-toolbar-title>The Database</v-toolbar-title>
    </v-app-bar>
    <!-- <transition name="fade"> -->
      <router-view>
      </router-view>
    <!-- </transition> -->
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    item: 3,
    items: [
      {
        title: "Bin Data",
        icon: "mdi-contact-mail",
        path: "/bin"
      },
      {
        title: "Staff Data",
        icon: "mdi-contact-mail",
        path: "/staff"
      },
      {
        title: "Inventory",
        icon: "mdi-contact-mail",
        path: "/inventory"
      }
    ]
  }),
};
</script>

<!-- SOMEHOW FIX THIS TRANSITION CSS HELP -->

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .25s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}
</style>
