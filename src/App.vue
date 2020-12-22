<template>
  <v-app id="inspire">
    <app-header></app-header>

    <v-main class="blue-grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    'app-header': Header
  }
}
</script>
