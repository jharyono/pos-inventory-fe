<template>
  <v-row>
    <v-col cols="12">
      <v-card class="mt-2">
        <panel title="Drug Type">
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
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Supplier Code
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Contact Person
                  </th>
                  <th>
                    Phone#
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </template>
          </v-simple-table>
        </panel>
      </v-card>

      <v-card class="mt-4">
        <panel title="Drug Category">
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
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    Supplier Code
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Contact Person
                  </th>
                  <th>
                    Phone#
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </template>
          </v-simple-table>
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
