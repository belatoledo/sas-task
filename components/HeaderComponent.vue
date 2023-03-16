<template>
  <div>
    <v-app-bar
      color="white"
      dense
      height="60"
    >
      <v-toolbar-title class="flexbox">
        <img width="30" src="../assets/images/rgb-bg.png" alt="RGB Colors">
        <span class="ml-3 font-weight-medium">Pattern Colors</span>
      </v-toolbar-title>

      <v-spacer />
      <nuxt-link v-if="$vuetify.breakpoint.lgAndUp" class="ml-n3 text-uppercase text-decoration-none black--text font-weight-medium" to="/login">
        <v-icon color="primary" size="20">
          mdi-heart
        </v-icon>
        Login
      </nuxt-link>
    </v-app-bar>
  </div>
</template>
<script>

export default {
  name: 'HeaderComponent',
  data: () => ({
    drawer: false
  })
}
</script>
