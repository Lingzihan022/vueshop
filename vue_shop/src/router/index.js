import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
Vue.use(Router)
const router = new Router({
  routes: [
      { path: '/login', component: Login },
      { path: '/', redirect: '/login' },
      { path: '/home', component: Home }
    ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from从哪个路径跳转而来
    // next是一个函数 表示放行
    // next()放行 next('/login')强制跳转
    if (to.path === '/login') return next()
    // 获取token
    const tokenstr = window.sessionStorage.getItem('token')
    if (!tokenstr) return next('/login')
    next()
}
)
export default router
