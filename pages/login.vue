<template>
  <v-app>
    <div class="mt-16 d-flex flex-column align-center justify-center">
      <img src="../assets/images/rgb-bg.png" alt="RGB Colors" width="100px" style="background-size: contain !important;">
      <h1 class="mt-2 text-center font-weight-bold">
        Color Patterns
      </h1>
      <p class="primary--text font-weight-medium text-center ">
        Many colors in one place
      </p>
    </div>

    <v-card outlined rounded :class="$vuetify.breakpoint.smAndDown ? 'pa-2' : 'pa-4'" class="mx-auto rounded-lg">
      <p class="surface--text py-6 mb-0 text-center">
        Access your dashboard and your colors collection
      </p>
      <v-form ref="form" v-model="valid" class="pa-2" @submit.prevent="($event) => $event.preventDefault()">
        <v-row no-gutters>
          <v-col cols="12" class="pb-3 px-1">
            <v-text-field
              v-model="email"
              dense
              outlined
              placeholder="Your best email"
              required
              height="45px"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" class="pb-3 px-1">
            <v-text-field
              v-model="password"
              dense
              outlined
              placeholder="Magic password"
              required
              :append-icon="showPassword ? 'mdi-eye-slash' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              height="45px"
              hide-details="auto"
              @click:append="showPassword = !showPassword"
            >
              <template #append>
                <v-icon small class="pt-2" @click="showPassword = !showPassword">
                  {{ !showPassword ? 'mdi mdi-eye-slash' : 'mdi mdi-eye' }}
                </v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="pt-4 px-1">
            <v-btn
              :class="{ primary: valid, background: !valid, disabled: !valid }"
              nuxt
              depressed
              width="100%"
              height="50px"
              class="btn-rounded"
              type="submit"
              label="Entrar"
              :disabled="!valid"
              @click="loginUser()"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
        <div class="mt-8 pb-2 d-flex flex-column">
          <nuxt-link to="/#" class="pl-1">
            Recovery password
          </nuxt-link>
          <v-row class="mt-1 px-4 d-flex justify-space-between">
            <span>New here? <nuxt-link tag="a" to="/#">Sign in</nuxt-link></span>
          </v-row>
        </div>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'LoginPage',
  data () {
    return {
      token: null,
      email: '',
      password: '',
      showPassword: false,
      valid: false
    }
  },
  methods: {
    loginUser () {
      api.post('/login_json', { login: { email: this.email, password: this.password } }).then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
        localStorage.setItem('token', response.data.data.result.access_token)
        this.$router.push('/dashboard')
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
      })
    }
  }
}
</script>
