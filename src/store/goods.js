import GoodsService from '@/services/goods.service.js'

export default {
  namespaced: true,
  state: {
    goods: []
  },

  mutations: {
    SET_GOODS(state, goods) {
      state.goods = goods
    },
    ADD_GOOD(state, good) {
      let goods = state.goods.concat(good)
      state.goods = goods
    },
    DELETE_GOOD(state, goodId) {
      let goods = state.goods.filter(c => c.id != goodId)
      state.goods = goods
    },
    EDIT_GOOD(state, good) {
      let c = state.goods.find(g => g.id != good.Id)
      c = good
    }
  },
  actions: {
    async loadGoods({ commit, dispatch }) {
      let response = await GoodsService.getAll()
      commit('SET_GOODS', response.data)
    },
    async create({ commit }, good) {
      try {
        let response = await GoodsService.post(good)
        let savedGood = response.data
        commit('ADD_GOOD', savedGood)
        return savedGood
      } catch (err) {
        return { error: err.response.data.error }
      }
    },
    async delete({ commit }, good) {
      let response = await GoodsService.delete(good)
      if (response.status == 200 || response.status == 204) {
        commit('DELETE_GOOD', good.id)
      }
    },
    async edit({ commit }, good) {
      let response = await GoodsService.put(good)
      let newGood = response.data
      commit('EDIT_GOOD', newGood)
      return newGood
    }
  }
}
