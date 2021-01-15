<template>
  <v-form>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="10" md="10" offset-sm="1" offset-md="1">
          <v-card>
            <panel title="Add User">
              <v-row no-gutters>
                <v-col cols="12" sm="4" md="4">
                  <v-text-field
                    dense
                    label="Name"
                    :rules="[required]"
                    v-model="user.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2" class="ml-4">
                  <v-text-field
                    dense
                    label="Group"
                    v-model="user.group"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" class="ml-4">
                  <v-text-field
                    dense
                    label="Password"
                    v-model="user.password"
                  ></v-text-field>
                </v-col>
                <v-row align="center" justify="space-around">
                  <v-btn
                    class="green darken-2"
                    dark
                    @click.native="addUser"
                    small
                  >
                    <v-icon left small>
                      mdi-check
                    </v-icon>
                    Save
                  </v-btn>
                </v-row>
              </v-row>
            </panel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data() {
    return {
      user: {
        name: null,
        group: null,
        password: null
      },
      error: null,
      required: value => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async addUser() {
      await this.$store.dispatch('users/create', this.user)
      this.$refs.form.reset()
    }
  }
}
</script>
