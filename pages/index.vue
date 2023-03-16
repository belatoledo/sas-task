<template>
  <v-app>
    <HeaderComponent />
    <v-main class="bg-effect">
      <img src="../assets/images/home-bg.svg" :width="$vuetify.breakpoint.smAndDown ? 300 : 600" class="mt-16 pt-16 flexbox">
      <v-btn
        class="mt-12 flexbox btn-rounded"
        width="300px"
        height="68"
        :style="$vuetify.breakpoint.smAndDown ? 'font-size: 18px !important' : 'font-size: 28px !important;'"
        to="/login"
      >
        Login
      </v-btn>
      <h1 class="mt-8 white--text text-uppercase text-center font-weight-bold" :class="$vuetify.breakpoint.smAndDown ? 'title-text-mobile' : 'title-text'">
        and manage your <span class="primary--text">colors</span>
      </h1>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss" scoped>
.bg-effect {
  min-height: 100vh !important;
  background: rgb(188,250,251);
  background: linear-gradient(90deg, rgba(188,250,251,1) 0%, rgba(217,193,255,1) 21%, rgba(255,221,135,1) 42%, rgba(253,210,189,1) 58%, rgba(251,199,246,1) 75%, rgba(228,255,166,1) 100%);
  animation: colors 8s infinite alternate ease-in;
}

@keyframes colors {
  50% {
    filter: hue-rotate(360deg)  ;
  }
}
</style>
