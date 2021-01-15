<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mt-2">
        <panel title="Goods">
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
              :to="{
                name: 'song-create'
              }"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-data-table :headers="headers" :items="items" :search="search">
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.code }}</td>
                <td>{{ row.item.name }}</td>
                <td>{{ row.item.manufacture }}</td>
                <td>{{ row.item.type }}</td>
                <td>{{ row.item.category }}</td>
                <td>{{ row.item.buyprice }}</td>
                <td>{{ row.item.sellprice }}</td>
                <td>{{ row.item.stock }}</td>
                <td>{{ row.item.unit }}</td>
                <td>
                  <v-btn class="blue accent-4" fab dark x-small>
                    <v-icon x-small>
                      mdi-format-list-bulleted
                    </v-icon>
                  </v-btn>

                  <v-btn class="red accent-4 ml-2" fab dark x-small>
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
  </v-row>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import Panel from '@/components/Panel'
// import ConfirmDeleteGroup from '@/components/Confirmation'

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Code',
          align: 'start',
          value: 'code'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Manufacture',
          value: 'manufacture'
        },
        {
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Category',
          value: 'category'
        },
        {
          text: 'Buy',
          value: 'buyprice'
        },
        {
          text: 'Sell',
          value: 'sellprice'
        },
        {
          text: 'Stock',
          value: 'stock'
        },
        {
          text: 'Unit',
          value: 'unit'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ],
      items: [
        {
          code: 'G0001',
          name: 'Paramex',
          manufacture: 'Kimia Farma',
          type: 'Tablet',
          category: 'Obat Keras',
          buyprice: '1000',
          sellprice: '1500',
          stock: '80',
          unit: 'strips'
        },
        {
          code: 'G0002',
          name: 'Kalpanax',
          manufacture: 'Rhoedes',
          type: 'Cair',
          category: 'Obat Keras',
          buyprice: '10000',
          sellprice: '15000',
          stock: '20',
          unit: 'bottle'
        },
        {
          code: 'G0003',
          name: 'OBH Dahak',
          manufacture: 'Kalbe',
          type: 'Cair',
          category: 'Obat Batuk',
          buyprice: '20000',
          sellprice: '25000',
          stock: '10',
          unit: 'bottle'
        }
      ]
    }
  },
  components: {
    Panel
    // 'app-conf-del-group': ConfirmDeleteGroup
  }
  // methods: {
  //   async deleteGroup(group) {
  //     if (
  //       await this.$refs.confirm.open(`Delete ${group.name}`, 'Are you sure?', {
  //         color: 'red accent-4'
  //       })
  //     ) {
  //       const response = await this.$store.dispatch('groups/delete', group)
  //       this.$store.dispatch('snackbar/setSnackbar', {
  //         text: `You have successfully delete, ${group.name}.`
  //       })
  //       // if (response.error) {
  //       //   this.$store.dispatch('snackbar/setSnackbar', {
  //       //     color: 'red accent-4',
  //       //     text: response.error
  //       //   })
  //       // } else {
  //       // }
  //       // this.$store.dispatch('groups/delete', group)
  //       // yes
  //     } else {
  //       return
  //     }
  //   },
  //   ...mapActions('groups', ['loadGroups'])
  // },
  // computed: {
  //   groups() {
  //     return this.$store.state.groups
  //   },
  //   ...mapState('groups', ['groups'])
  // },
  // mounted() {
  //   this.loadGroups()
  // }
}
</script>
