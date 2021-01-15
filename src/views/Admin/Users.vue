<template>
  <v-container>
    <app-adduser />
    <app-userlist />
  </v-container>
</template>

<script>
import AddUser from '@/components/User/AddUser'
import UserList from '@/components/User/UserList'
export default {
  components: {
    'app-adduser': AddUser,
    'app-userlist': UserList
  }
}
</script>
