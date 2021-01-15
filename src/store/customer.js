import CustomerService from '@/services/customer.service.js'

export default {
  namespaced: true,
  state: {
    customers: []
  },

  mutations: {
    SET_CUSTOMERS(state, customers) {
      state.customers = customers
    },
    ADD_CUSTOMER(state, customer) {
      let customers = state.customers.concat(customer)
      state.customers = customers
    },
    DELETE_CUSTOMER(state, customerId) {
      let customers = state.customers.filter(c => c.id != customerId)
      state.customers = customers
    },
    EDIT_CUSTOMER(state, customer) {
      let c = state.customers.find(g => g.id != customer.Id)
      c = customer
    }
  },
  actions: {
    async loadCustomers({ commit, dispatch }) {
      let response = await CustomerService.getAll()
      commit('SET_CUSTOMERS', response.data)
    },
    async create({ commit }, customer) {
      try {
        let response = await CustomerService.post(customer)
        let savedCustomer = response.data
        commit('ADD_CUSTOMER', savedCustomer)
        return savedCustomer
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async delete({ commit }, customer) {
      let response = await CustomerService.delete(customer)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE_CUSTOMER', customer.id)
      }
    },
    async edit({ commit }, customer) {
      let response = await CustomerService.put(customer)
      let newCustomer = response.data.data
      commit('EDIT_GROUP', newCustomer)
      return newCustomer
    }
  }
}
