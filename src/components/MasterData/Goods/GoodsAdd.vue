<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="blue-grey darken-3 dark">
          <span class="grey--text text--lighten-4 headline">Add Supplier</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" sm="8">
                  <v-text-field
                    label="Name"
                    :rules="[required]"
                    v-model="supplier.sp_name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    label="Phone"
                    v-model="supplier.sp_phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    v-model="supplier.sp_address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-text-field
                    label="Contact"
                    v-model="supplier.sp_contact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field
                    label="Contact Phone"
                    v-model="supplier.sp_contact_phone"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey darken-1 " small dark @click.native="close">
            Close
          </v-btn>
          <v-btn
            color="blue-grey darken-1"
            small
            dark
            @click.native="addSupplier"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      supplier: {
        sp_name: null,
        sp_address: null,
        sp_phone: null,
        sp_contact: null,
        sp_contact_phone: null
      },
      error: null,
      required: value => !!value || 'Required.'
    }
  },
  props: {
    dialog: {
      default: false
    }
  },
  methods: {
    async addSupplier() {
      const areFilled = Object.keys(this.supplier).every(
        key => !!this.supplier[key]
      )
      if (!areFilled) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: 'Please fill in all required fields.'
        })
        return
      }
      try {
        await this.$store.dispatch('supplier/create', this.supplier)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully add new supplier, ${this.supplier.cs_name}.`
        })
        this.$refs.form.reset()
        this.$emit('update:dialog', false)
      } catch (err) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: err + ` ${this.supplier.cs_name}`
        })
      }
    },
    close() {
      this.$refs.form.reset()
      this.$emit('update:dialog', false)
    }
  }
}
</script>
