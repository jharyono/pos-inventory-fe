<template>
  <v-app id="inspire">
    <app-header></app-header>

    <v-main class="blue-grey lighten-4">
      <router-view></router-view>
    </v-main>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + Math.random()"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar.showing = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
export default {
  components: {
    'app-header': Header
  },
  computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  }
}
</script>
