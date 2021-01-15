<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mt-2">
        <panel title="Customer">
          <template v-slot:search>
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </template>

          <template v-slot:action>
            <v-btn
              class="blue-grey darken-1"
              absolute
              right
              middle
              small
              fab
              @click="newCustomer"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-data-table :headers="headers" :items="customers" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.cs_name }}</td>
                <td>{{ row.item.cs_address }}</td>
                <td>{{ row.item.cs_phone }}</td>
                <td>{{ row.item.cs_mobile }}</td>

                <td>
                  <v-btn
                    class="red accent-4"
                    fab
                    dark
                    x-small
                    @click="deleteCustomer(row.item)"
                  >
                    <v-icon x-small>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="orange accent-4 ml-2"
                    fab
                    dark
                    x-small
                    @click="dialogEdit = true"
                  >
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </panel>
      </v-card>
    </v-col>

    <!-- form dialog -->
    <dlg-addcustomer :dialog.sync="dialogAdd"></dlg-addcustomer>
    <dlg-editcustomer :dialog.sync="dialogEdit"></dlg-editcustomer>
    <dlg-deletecustomer ref="confirm" />
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Panel from '@/components/Panel'
import AddCustomer from '@/components/MasterData/AddCustomer'
import EditCustomer from '@/components/MasterData/EditCustomer'
import DeleteCustomer from '@/components/Confirmation'

export default {
  data() {
    return {
      // customer: {
      //   cs_name: null,
      //   cs_address: null,
      //   cs_phone: null,
      //   cs_mobile: null
      // },
      error: null,
      required: value => !!value || 'Required.',
      dialogAdd: false,
      dialogEdit: false,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'cs_name'
        },
        {
          text: 'Address',
          value: 'cs_address'
        },
        {
          text: 'Phone',
          value: 'cs_phone'
        },
        {
          text: 'Mobile',
          value: 'cs_mobile'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ]
    }
  },
  components: {
    Panel,
    'dlg-addcustomer': AddCustomer,
    'dlg-editcustomer': EditCustomer,
    'dlg-deletecustomer': DeleteCustomer
  },
  methods: {
    newCustomer() {
      this.customer = {}
      this.dialogAdd = true
    },
    async deleteCustomer(customer) {
      if (
        await this.$refs.confirm.open(
          `Delete ${customer.cs_name}`,
          'Are you sure?',
          {
            color: 'red accent-4'
          }
        )
      ) {
        const response = await this.$store.dispatch('customer/delete', customer)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully delete, ${customer.cs_name}.`
        })
      } else {
        return
      }
    },
    ...mapActions('customer', ['loadCustomers'])
  },
  computed: {
    ...mapState('customer', ['customers'])
  },
  mounted() {
    this.loadCustomers()
  }
}
</script>
