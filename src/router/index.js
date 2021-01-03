import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/form'
import Calendar from '@/components/calendar'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
  ]
})
