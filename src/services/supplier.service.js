import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('supplier')
  },

  put(supplier) {
    return Api().put(`supplier/${supplier.id}`, supplier)
  },

  post(supplier) {
    return Api().post('supplier', supplier)
  },

  delete(supplier) {
    return Api().delete(`supplier/${supplier.id}`, supplier)
  }
}
