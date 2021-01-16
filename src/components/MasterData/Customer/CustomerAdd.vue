<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="blue-grey darken-3 dark">
          <span class="grey--text text--lighten-4 headline">Add Customer</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    :rules="[required]"
                    v-model="customer.cs_name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    v-model="customer.cs_address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Phone"
                    v-model="customer.cs_phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Mobile"
                    v-model="customer.cs_mobile"
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
            @click.native="addCustomer"
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
      customer: {
        cs_name: null,
        cs_address: null,
        cs_phone: null,
        cs_mobile: null
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
    async addCustomer() {
      const areFilled = Object.keys(this.customer).every(
        key => !!this.customer[key]
      )
      if (!areFilled) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: 'Please fill in all required fields.'
        })
        return
      }
      try {
        await this.$store.dispatch('customer/create', this.customer)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully add new customer, ${this.customer.cs_name}.`
        })
        this.$refs.form.reset()
        this.$emit('update:dialog', false)
      } catch (err) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: err + ` ${this.customer.cs_name}`
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
