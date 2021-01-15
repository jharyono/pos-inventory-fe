import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('customer')
  },

  put(customer) {
    return Api().put(`customer/${customer.id}`, customer)
  },

  post(customer) {
    return Api().post('customer', customer)
  },

  delete(customer) {
    return Api().delete(`customer/${customer.id}`, customer)
  }
}
