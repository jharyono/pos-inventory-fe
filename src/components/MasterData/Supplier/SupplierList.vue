<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mt-2">
        <panel title="Supplier">
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
              @click="newSupplier"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-data-table :headers="headers" :items="suppliers" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.sp_name }}</td>
                <td>{{ row.item.sp_address }}</td>
                <td>{{ row.item.sp_phone }}</td>
                <td>{{ row.item.sp_contact }}</td>
                <td>{{ row.item.sp_contact_phone }}</td>
                <td>
                  <v-btn
                    class="red accent-4 ml-2"
                    fab
                    dark
                    x-small
                    @click="deleteSupplier(row.item)"
                  >
                    <v-icon x-small>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                  <v-btn class="orange accent-4 ml-2" fab dark x-small>
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
    <dlg-addsupplier :dialog.sync="dialogAdd"></dlg-addsupplier>
    <dlg-deletesupplier ref="confirm" />
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Panel from '@/components/Panel'
import AddSupplier from '@/components/MasterData/AddSupplier'
import DeleteSupplier from '@/components/Confirmation'

export default {
  data() {
    return {
      // supplier: {
      //   sp_name: null,
      //   sp_address: null,
      //   sp_phone: null,
      //   sp_contact: null,
      //   sp_contact_phone: null
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
          value: 'sp_name'
        },
        {
          text: 'Adress',
          value: 'sp_address'
        },
        {
          text: 'Phone',
          value: 'sp_phone'
        },
        {
          text: 'Contact',
          value: 'sp_contact'
        },
        {
          text: 'Contact Phone',
          value: 'sp_contact_phone'
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
    'dlg-addsupplier': AddSupplier,
    'dlg-deletesupplier': DeleteSupplier
  },
  methods: {
    newSupplier() {
      this.supplier = {}
      this.dialogAdd = true
    },
    async deleteSupplier(supplier) {
      if (
        await this.$refs.confirm.open(
          `Delete ${supplier.sp_name}`,
          'Are you sure?',
          {
            color: 'red accent-4'
          }
        )
      ) {
        const response = await this.$store.dispatch('supplier/delete', supplier)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully delete, ${supplier.sp_name}.`
        })
      } else {
        return
      }
    },
    ...mapActions('supplier', ['loadSuppliers'])
  },
  computed: {
    ...mapState('supplier', ['suppliers'])
  },
  mounted() {
    this.loadSuppliers()
  }
}
</script>
