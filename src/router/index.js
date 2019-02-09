import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '../components/NotFound'
import Home from '../components/Home'
import Login from '../components/Login'
import Board from '../components/Board'
import Card from '../components/Card'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {path: '/b/:bid', component: Board, children: [
      {
        path: 'c/:cid', component: Card
      }
    ]
  },
  {path: '*', component: Notfound}
]

const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes`의 줄임
})


export default router
