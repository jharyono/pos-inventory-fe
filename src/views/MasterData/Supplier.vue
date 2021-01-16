<template>
  <v-container>
    <panel-supplierlist />
  </v-container>
</template>

<script>
import SupplierList from '@/components/MasterData/SupplierList'
export default {
  components: {
    'panel-supplierlist': SupplierList
  }
}
</script>
