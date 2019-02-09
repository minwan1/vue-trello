import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const Login = {template: '<div>Login Page</div>'};
const Notfound = {template: '<div> Page not found</div>'};


const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  {path: '*', component: Notfound}
]

const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes`의 줄임
})


export default router
