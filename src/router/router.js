import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user/:uid',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/sensor/:desc',
    name: 'Sensor',
    component: () => import('../views/Sensor.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import('../views/Three.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  if(VueCookie.get("accesstoken")==null && to.fullPath!="/")  {
    if(confirm("please log in")){
      router.push("/")
    }
  } else{
    next();
  }
});

export default router