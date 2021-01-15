<template>
  <v-container>
    <panel-supplierlist />

    <!-- <panel-supplier /> -->

    <!-- <panel-goods /> -->
  </v-container>
</template>

<script>
import SupplierList from '@/components/MasterData/SupplierList'
// import Supplier from '@/views/Supplier'

// import Goods from '@/views/Goods'
export default {
  components: {
    'panel-supplierlist': SupplierList
    // 'panel-supplier': Supplier,
    // 'app-editgroup': EditGroup,
    // 'panel-goods': Goods
  }
}
</script>
