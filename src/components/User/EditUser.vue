<template>
  <v-dialog v-model="showCreateUser" persistent max-width="400px">
    <v-card>
      <panel title="Add User">
        <v-text-field label="Name"></v-text-field>
        <v-text-field label="Group"></v-text-field>
        <v-text-field label="Password"></v-text-field>
        <v-text-field label="Confirm Password"></v-text-field>
      </panel>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" dark @click.native="close">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import UserGroupService from '@/services/UserGroupService'
import Panel from '@/components/Panel'
export default {
  props: {
    showCreateUser: {
      default: false
    }
  },
  components: {
    Panel
  },
  methods: {
    close() {
      this.$emit('update:showCreateUser', false)
    }
  }
}
</script>
