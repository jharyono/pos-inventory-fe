<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="8" md="8" offset-sm="2" offset-md="2">
        <v-card>
          <panel title="Edit Group">
            <v-form ref="form">
              <v-row no-gutters>
                <v-col cols="12" sm="3" md="3">
                  <v-text-field
                    dense
                    label="Group Name"
                    :rules="[required]"
                    v-model="group.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="ml-4">
                  <v-text-field
                    dense
                    label="Description"
                    v-model="group.description"
                  ></v-text-field>
                </v-col>
                <v-row align="center" justify="space-around">
                  <v-btn
                    class="green darken-2"
                    dark
                    @click.native="addGroup"
                    small
                  >
                    <v-icon left small>
                      mdi-check
                    </v-icon>
                    Save
                  </v-btn>
                </v-row>
              </v-row>
            </v-form>
          </panel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data() {
    return {
      group: {
        name: null,
        description: null
      },
      error: null,
      required: value => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async addGroup() {
      const areFilled = Object.keys(this.group).every(key => !!this.group[key])
      if (!areFilled) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: 'Please fill in all required fields.'
        })
        return
      }
      const response = await this.$store.dispatch('groups/create', this.group)
      if (response.error) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red accent-4',
          text: response.error
        })
      } else {
        this.$store.dispatch('snackbar/setSnackbar', {
          text: 'You have successfully add new group, ${group.name}.'
        })
      }
      this.$refs.form.reset()
    }
  }
}
</script>
