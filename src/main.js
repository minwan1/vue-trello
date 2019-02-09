import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = {template: '<div>Login Page</div>'};
const Notfound = {template: '<div> Page not found</div>'};


const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  {path: '*', component: Notfound} //우선순위가 제일 낮음
]

const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes`의 줄임
})


new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
});
