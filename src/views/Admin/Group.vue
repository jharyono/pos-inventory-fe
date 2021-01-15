<template>
  <v-container>
    <app-addgroup />
    <!-- <app-editgroup /> -->
    <app-grouplist />
  </v-container>
</template>

<script>
import AddGroup from '@/components/Group/AddGroup'
// import EditGroup from '@/components/Group/EditGroup'
import GroupList from '@/components/Group/GroupList'
export default {
  components: {
    'app-addgroup': AddGroup,
    // 'app-editgroup': EditGroup,
    'app-grouplist': GroupList
  }
}
</script>
