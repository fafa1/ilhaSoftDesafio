import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/category'
import Detalhe from '@/components/detalhe'

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
      path: '/d',
      name: 'Detalhe',
      component: Detalhe,
      props: true
    }
  ]

})
