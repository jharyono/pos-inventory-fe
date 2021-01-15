import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('groups')
  },

  put(usergroup) {
    return Api().put(`groups/${usergroup.id}`, usergroup)
  },

  post(usergroup) {
    return Api().post('groups', usergroup)
  },

  delete(usergroup) {
    return Api().delete(`groups/${usergroup.id}`, usergroup)
  }
}
