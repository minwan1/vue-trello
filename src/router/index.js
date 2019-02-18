import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '../components/NotFound'
import Home from '../components/Home'
import Login from '../components/Login'
import Board from '../components/Board'
import Card from '../components/Card'
import store from '../store'


Vue.use(VueRouter);


const requireAuth = (to, from, next) =>{
  const isAuth = store.getters.isAuth;
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const routes = [
  { path: '/', component: Home, beforeEnter: requireAuth },
  { path: '/login', component: Login},
  {path: '/b/:bid', component: Board, children: [
      {
        path: 'c/:cid', component: Card, beforeEnter: requireAuth
      }
    ]
  },
  {path: '*', component: Notfound}
];

const router = new VueRouter({
  mode: 'history',
  routes // `routes: routes`의 줄임
});

export default router
