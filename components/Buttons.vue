<template>
  <v-row>
    <div
      class="pa-3 btn-position"
      :class="$vuetify.breakpoint.smAndDown ? 'mb-0 background d-flex align-center justify-center' : 'd-flex align-end justify-end'"
    >
      <v-btn
        class="mx-2"
        color="success"
        elevation="1"
        fab
        small
        :x-large="$vuetify.breakpoint.mdAndUp"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        color="secondary"
        elevation="1"
        fab
        small
        :x-large="$vuetify.breakpoint.mdAndUp"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        color="error"
        elevation="1"
        fab
        small
        :x-large="$vuetify.breakpoint.mdAndUp"
      >
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
      <!-- <v-bottom-sheet v-model="sheet">
        <v-sheet
          class="text-center"
          height="200px"
        >
          <v-btn
            class="mt-6"
            text
            color="red"
            @click="sheet = !sheet"
          >
            close
          </v-btn>
          <div class="py-3">
            This is a bottom sheet using the controlled by v-model instead of activator
          </div>
        </v-sheet>
      </v-bottom-sheet> -->
    </div>
  </v-row>
</template>
<script>
export default {
  name: 'ButtonsComponent'
}
</script>
  <style lang="scss" scoped>
    .btn-position {
    position: fixed !important;
    bottom: 50px !important;
    right: 0 !important;
    width: 100% !important;
    }
  </style>
