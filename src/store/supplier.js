import SupplierService from '@/services/supplier.service.js'

export default {
  namespaced: true,
  state: {
    suppliers: []
  },

  mutations: {
    SET_SUPPLIERS(state, suppliers) {
      state.suppliers = suppliers
    },
    ADD_SUPPLIER(state, supplier) {
      let suppliers = state.suppliers.concat(supplier)
      state.suppliers = suppliers
    },
    DELETE_SUPPLIER(state, supplierId) {
      let suppliers = state.suppliers.filter(c => c.id != supplierId)
      state.suppliers = suppliers
    },
    EDIT_SUPPLIER(state, supplier) {
      let c = state.suppliers.find(g => g.id != supplier.Id)
      c = supplier
    }
  },
  actions: {
    async loadSuppliers({ commit, dispatch }) {
      let response = await SupplierService.getAll()
      commit('SET_SUPPLIERS', response.data)
    },
    async create({ commit }, supplier) {
      try {
        let response = await SupplierService.post(supplier)
        let savedSupplier = response.data
        commit('ADD_SUPPLIER', savedSupplier)
        return savedSupplier
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async delete({ commit }, supplier) {
      let response = await SupplierService.delete(supplier)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE_SUPPLIER', supplier.id)
      }
    },
    async edit({ commit }, customer) {
      let response = await SupplierService.put(customer)
      let newCustomer = response.data.data
      commit('EDIT_GROUP', newCustomer)
      return newCustomer
    }
  }
}
