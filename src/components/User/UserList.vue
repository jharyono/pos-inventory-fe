<template>
  <v-row>
    <v-col cols="12" sm="8" md="8" offset-sm="2" offset-md="2">
      <v-card class="mt-2">
        <panel title="User List">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th>
                    Group
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td style="width:30%">{{ user.name }}</td>
                  <td style="width:45%">{{ user.group }}</td>
                  <td style="width:25%">
                    <v-btn
                      class="red accent-4"
                      fab
                      dark
                      x-small
                      @click="deleteUser(user)"
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

export default {
  components: {
    Panel
  },
  methods: {
    deleteUser(user) {
      let response = confirm(`Are you sure you want to delete ${user.name}`)
      if (response) {
        this.$store.dispatch('user/delete', user)
      }
    },
    ...mapActions('users', ['loadUsers'])
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    ...mapState('users', ['users'])
  },
  mounted() {
    this.loadUsers()
  }
}
</script>
