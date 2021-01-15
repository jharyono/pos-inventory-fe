import GroupService from '@/services/group.service.js'

export default {
  namespaced: true,
  state: {
    groups: [],
    group: null
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups
    },
    SET_GROUP(state, group) {
      state.group = group
    },
    ADD_GROUP(state, group) {
      let groups = state.groups.concat(group)
      state.groups = groups
    },
    DELETE_GROUP(state, groupId) {
      let groups = state.groups.filter(g => g.id != groupId)
      state.groups = groups
    },
    EDIT_GROUP(state, group) {
      let g = state.videos.find(g => g.id != group.Id)
      g = group
    }
  },
  actions: {
    async loadGroups({ commit }) {
      let response = await GroupService.getAll()
      commit('SET_GROUPS', response.data)
    },
    async create({ commit }, group) {
      try {
        let response = await GroupService.post(group)
        let savedGroup = response.data
        commit('ADD_GROUP', savedGroup)
        return savedGroup
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async delete({ commit }, group) {
      try {
        let response = await GroupService.delete(group)
        if (response.status == 200 || response.status == 204) {
          commit('DELETE_GROUP', group.id)
        }
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async edit({ commit }, group) {
      let response = await GroupService.put(group)
      let changedGroup = response.data.data
      commit('EDIT_GROUP', changedGroup)
      return changedGroup
    }
  }
}
