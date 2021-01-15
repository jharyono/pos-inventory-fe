<template>
  <v-container>
    <panel-goodslist />

    <!-- <panel-supplier /> -->

    <!-- <panel-goods /> -->
  </v-container>
</template>

<script>
import GoodsList from '@/components/MasterData/GoodsList'
// import Supplier from '@/views/Supplier'

// import Goods from '@/views/Goods'
export default {
  components: {
    'panel-goodslist': GoodsList
    // 'panel-supplier': Supplier,
    // 'app-editgroup': EditGroup,
    // 'panel-goods': Goods
  }
}
</script>
