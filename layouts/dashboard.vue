<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title class="header-logo flexbox">
        <img width="30" src="../assets/images/rgb-bg.png" alt="RGB Colors">
        <span class="ml-3 font-weight-medium">Pattern Colors</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <nuxt-link to="/login" @click="logout()">
        <v-icon>mdi-logout</v-icon>
        Logout
      </nuxt-link>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>Made by Izabela Toledo • &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'DashboardLayout',
  components: {
    // HeaderComponent
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'My collection',
          to: '/collection'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Manage colors',
          to: '/manage-colors'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  }
}
</script>
