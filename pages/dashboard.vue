<template>
  <v-row class="d-flex">
    <v-col cols="12">
      <h1>
        Welcome to your Pattern Colors collection!
      </h1>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="data in dataList"
              :key="data.id"
              cols="12"
              md="3"
            >
              <v-item>
                <v-card
                  class="flexbox"
                  :style="`background-color: ${ data.bg_color }`"
                  height="150"
                  style="width: 150px !important;"
                >
                  <v-scroll-y-transition>
                    <div>
                      <p class="font-weight-medium text-center">
                        Color
                      </p>
                      {{ data.text_color }}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-btn
        class="mx-2 btn-position"
        color="primary"
        elevation="1"
        fab
        small
        x-large
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { api } from '../api'

export default {
  name: 'DashboardPage',
  layout: 'dashboard',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    api.get('/calendar_patterns')
      .then((response) => {
        this.dataList = response.data.data.entities
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
.btn-position {
  position: absolute !important;
  bottom: 40px !important;
  right: 80px !important;
}

</style>
