import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/category'
import Detalhe from '@/components/detalheFilme'
import Playlist  from '@/components/playList'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Category',
      component: Category
    },
    {
      path: '/detalhe',
      name: 'Detalhe',
      component: Detalhe,
      props: true
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist,
    }
  ]

})
