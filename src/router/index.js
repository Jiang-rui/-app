import Vue from 'vue'
import Router from 'vue-router'
import movie from '../views/movie/movie.vue'
import book from '../views/book/book.vue'
import music from '../views/music/music.vue'

import card from '../views/movie/card.vue'
import subject from '../views/movie/subject.vue'

import index from '../components/index.vue'
import sign from'../components/sign.vue'

import listCard from '../views/music/Listcard.vue'
import song from '../views/music/song.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/movie'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path:'/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/movie/:list',
      name:'list',
      component: card
    },
    {
      path: '/movie/subject/:id',
      name:'subject',
      component: subject
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/music',
      name: 'music',
      component: music,
    },
    {
      path:'/listCard/:id',
      name:'listCard',
      component:listCard
    },
    {
      path:'/song/:id',
      name:'song',
      component: song
    }
    // {
    //   path:'/movie/intheater/:id',
    //   name: 'subject',
    //   component: subject
    // },
    // {
    //   path: '/movie/coming_soon',
    //   name: 'comingSoon',
    //   component: card
    // },{
    //   path: '/movie/top250',
    //   name: 'top250',
    //   component:card
    // },{
    //   path: '/movie/us_box',
    //   name: 'us_box',
    //   component: card
    // }
  ]
})
