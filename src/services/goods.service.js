import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('goods')
  },

  put(goods) {
    return Api().put(`goods/${goods.id}`, goods)
  },

  post(goods) {
    return Api().post('goods', goods)
  },

  delete(goods) {
    return Api().delete(`goods/${goods.id}`, goods)
  }
}
