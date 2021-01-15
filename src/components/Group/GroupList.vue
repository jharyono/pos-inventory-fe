<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" offset-sm="2" offset-md="2">
      <v-card class="mt-2">
        <app-conf-del-group ref="confirm" />
        <panel title="Group List">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th>
                    Description
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="group in groups" :key="group.name">
                  <td style="width:30%">{{ group.name }}</td>
                  <td style="width:45%">{{ group.description }}</td>
                  <td style="width:25%">
                    <v-btn
                      class="red accent-4"
                      fab
                      dark
                      x-small
                      @click="deleteGroup(group)"
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
                      @click="editGroup(group)"
                    >
                      <v-icon>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </panel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Panel from '@/components/Panel'
import ConfirmDeleteGroup from '@/components/Confirmation'

export default {
  components: {
    Panel,
    'app-conf-del-group': ConfirmDeleteGroup
  },
  methods: {
    async deleteGroup(group) {
      if (
        await this.$refs.confirm.open(`Delete ${group.name}`, 'Are you sure?', {
          color: 'red accent-4'
        })
      ) {
        const response = await this.$store.dispatch('groups/delete', group)
        this.$store.dispatch('snackbar/setSnackbar', {
          text: `You have successfully delete, ${group.name}.`
        })
        // if (response.error) {
        //   this.$store.dispatch('snackbar/setSnackbar', {
        //     color: 'red accent-4',
        //     text: response.error
        //   })
        // } else {
        // }
        // this.$store.dispatch('groups/delete', group)
        // yes
      } else {
        return
      }
    },
    ...mapActions('groups', ['loadGroups'])
  },
  computed: {
    groups() {
      return this.$store.state.groups
    },
    ...mapState('groups', ['groups'])
  },
  mounted() {
    this.loadGroups()
  }
}
</script>
