<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="blue-grey darken-3 dark">
          <span class="grey--text text--lighten-4 headline">Edit Customer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Address"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Phone"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Mobile"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey darken-1 " dark @click.native="close">
            Close
          </v-btn>
          <v-btn color="blue-grey darken-1" dark @click.native="close">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:dialog', false)
    }
  }
}
</script>
