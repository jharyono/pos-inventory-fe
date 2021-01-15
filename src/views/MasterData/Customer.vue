<template>
  <v-container>
    <panel-customerlist />

    <!-- <panel-supplier /> -->

    <!-- <panel-goods /> -->
  </v-container>
</template>

<script>
import CustomerList from '@/components/MasterData/CustomerList'
// import Supplier from '@/views/Supplier'

// import Goods from '@/views/Goods'
export default {
  components: {
    'panel-customerlist': CustomerList
    // 'panel-supplier': Supplier,
    // 'app-editgroup': EditGroup,
    // 'panel-goods': Goods
  }
}
</script>
