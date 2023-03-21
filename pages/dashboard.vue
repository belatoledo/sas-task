<template>
  <v-row class="d-flex">
    <v-col class="mt-4 px-6 pl-lg-14">
      <h1>
        Welcome to your collection!
      </h1>
      <p class="primary--text">
        Add, update or remove colors quickly and easily :)
      </p>
    </v-col>
    <v-col cols="12" class="mb-16">
      <v-item-group>
        <v-container>
          <v-row>
            <v-col
              v-for="data in dataList"
              :key="data.id"
              cols="6"
              sm="3"
              lg="2"
            >
              <v-item>
                <v-card
                  class="flexbox"
                  :style="{ backgroundColor: data.bg_color }"
                  height="150"
                  style="width: 150px !important;"
                >
                  <v-scroll-y-transition>
                    <div>
                      <p class="font-weight-medium text-center" :style="`color: ${data.text_color }`">
                        Color <br> {{ data.bg_color }}
                      </p>
                      <v-btn icon absolute bottom right>
                        <v-icon class="mt-8 ml-8" color="white">
                          mdi-eye
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <ButtonsComponent />
    </v-col>
  </v-row>
</template>

<script>
import { api } from '../api'
import ButtonsComponent from '../components/Buttons.vue'

export default {
  name: 'DashboardPage',
  components: {
    ButtonsComponent
  },
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
        console.log(this.dataList)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
