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
          class="hover"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-btn
        class="mt-2 hover d-flex justify-start text-decoration-none"
        width="100%"
        text
        nuxt
        to="/login"
        @click="logout()"
      >
        <v-icon class="mr-8">
          mdi-logout
        </v-icon>
        Logout
      </v-btn>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      class="flexbox"
      app
    >
      <p>Made by <span class="secondary--text">Izabela Toledo</span> • &copy; {{ new Date().getFullYear() }}</p>
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'My collection',
          to: '/dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        }
      ]

    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>
