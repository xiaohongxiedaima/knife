import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/Home.vue')
  },
  {
    path: "/fmtDate",
    component: () => import('./../components/FmtDate.vue')
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})