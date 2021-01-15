import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Admin/Users.vue'
import Group from '../views/Admin/Group.vue'
import Setting from '../views/Admin/Setting.vue'
import Supplier from '../views/MasterData/Supplier.vue'
import Goods from '../views/MasterData/Goods.vue'
import Customer from '../views/MasterData/Customer.vue'
import TypeCategory from '../views/MasterData/TypeCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/admin/group',
    name: 'Group',
    component: Group
  },
  {
    path: '/admin/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/master/supplier',
    name: 'Supplier',
    component: Supplier
  },
  {
    path: '/master/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/master/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/master/typecat',
    name: 'TypeCategory',
    component: TypeCategory
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
