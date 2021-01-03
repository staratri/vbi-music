import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/songs'
  },
  {
    path: '/songs',
    name: 'Songs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/SongsPage.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/Playlists.vue')
  },
  {
    name: 'PlaylistPage',
    path: '/playlists/:id',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/PlaylistPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
