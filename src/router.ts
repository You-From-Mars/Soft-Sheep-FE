import Vue from 'vue';
import Router from 'vue-router';
import * as page from './index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: page.Home,
    },
    {
      path: '/u/:id',
      name: 'user',
      component: page.User,
    },
    {
      path: '/personal',
      name: 'personal',
      component: page.Home,
    },
    {
      path: '/p/:id',
      name: 'articleDetail',
      component: page.Detail,
    },
    {
      path: '/signin',
      name: 'signin',
      component: page.Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: page.Signup,
    },
    {
      path: '/writer',
      name: 'writer',
      component: page.Writer,
    },
  ],
});
