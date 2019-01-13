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
      path: '/p/:id',
      name: 'articleDetail',
      component: page.Detail,
    },
  ],
});
