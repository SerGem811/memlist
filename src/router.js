import Vue from 'vue';
import Router from 'vue-router';
import store from '@/core/services/store';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/ml-dashboard',
    component: () => import('@/view/layout/Layout'),
    children: [
      {
        path: '/ml-dashboard',
        name: 'ml-dashboard',
        component: () => import('@/view/pages/ml/Dashboard.vue')
      },
      {
        path: '/ml-advanced-search',
        name: 'ml-advanced-search',
        component: () => import('@/view/pages/ml/AdvancedSearch.vue')
      },
      {
        path: '/ml-users',
        name: 'ml-users',
        component: () => import('@/view/pages/ml/Users.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/view/pages/ml/auth/Auth.vue'),
    children: [
      {
        name: 'ml-login',
        path: '/ml-login',
        component: () => import('@/view/pages/ml/auth/Login.vue')
      },
      {
        name: 'ml-register',
        path: '/ml-register',
        component: () => import('@/view/pages/ml/auth/Register.vue')
      },
      {
        name: 'ml-forget',
        path: '/ml-forget',
        component: () => import('@/view/pages/ml/auth/Forget.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/view/pages/members/auth/Auth.vue'),
    children: [
      {
        name: 'login',
        path: '/login',
        component: () => import('@/view/pages/members/auth/Login.vue')
      },
      {
        name: 'register',
        path: '/register',
        component: () => import('@/view/pages/members/auth/Register.vue')
      },
      {
        name: 'forget',
        path: '/forget',
        component: () => import('@/view/pages/members/auth/Forget.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    // the 404 route, when none of the above matches
    path: '/404',
    name: '404',
    component: () => import('@/view/pages/Error.vue')
  }
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
