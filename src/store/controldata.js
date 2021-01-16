import ControlDataService from '@/services/controldata.service.js'

export default {
  namespaced: true,
  state: {
    controldatas: []
  },

  mutations: {
    SET_CONTROLDATAS(state, controldatas) {
      state.controldata = controldatas
    },
    ADD_CONTROLDATA(state, controldata) {
      let controldatas = state.controldatas.concat(controldata)
      state.controldatas = controldatas
    },
    DELETE_CONTROLDATA(state, controldataId) {
      let controldatas = state.controldatas.filter(c => c.id != controldataId)
      state.controldatas = controldatas
    },
    EDIT_CONTROLDATA(state, controldata) {
      let c = state.controldatas.find(g => g.id != controldata.Id)
      c = controldata
    }
  },
  actions: {
    async loadcontroldatas({ commit, dispatch }) {
      let response = await ControlDataService.getAll()
      commit('SET_CONTROLDATAS', response.data)
    },
    async create({ commit }, controldata) {
      try {
        let response = await ControlDataService.post(controldata)
        let savedControlData = response.data
        commit('ADD_CONTROLDATA', savedControlData)
        return savedControlData
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async delete({ commit }, controldata) {
      let response = await ControlDataService.delete(controldata)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE_CONTROLDATA', controldata.id)
      }
    },
    async edit({ commit }, controldata) {
      let response = await ControlDataService.put(controldata)
      let newControlData = response.data.data
      commit('EDIT_CONTROLDATA', newControlData)
      return newControlData
    }
  }
}
