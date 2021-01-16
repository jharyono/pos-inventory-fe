import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('controldata')
  },

  put(controldata) {
    return Api().put(`controldata/${controldata.id}`, controldata)
  },

  post(controldata) {
    return Api().post('controldata', controldata)
  },

  delete(controldata) {
    return Api().delete(`controldata/${controldata.id}`, controldata)
  }
}
