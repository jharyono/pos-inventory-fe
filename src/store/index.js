import Vue from 'vue'
import Vuex from 'vuex'
import groupsModule from './groups'
import customerModule from './customer'
import supplierModule from './supplier'
import snackbarModule from './snackbar'
// import tagsModule from './tags'
// import videosModule from './videos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbar: snackbarModule,
    groups: groupsModule,
    customer: customerModule,
    supplier: supplierModule
    // users: usersModule
  }
})
