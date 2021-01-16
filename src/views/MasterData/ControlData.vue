<template>
  <v-container>
    <panel-controldatalist />
  </v-container>
</template>

<script>
import ControlDataList from '@/components/MasterData/ControlDataList'
export default {
  components: {
    'panel-controldatalist': ControlDataList
  }
}
</script>
