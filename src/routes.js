import HomePage     from './pages/bro_main.vue';
import ProfilePage  from './pages/bro_profile.vue';
import BasketPage   from './pages/bro_basket.vue';
import WantPage     from './pages/bro_want.vue';
import NotFoundPage from './pages/not-found.vue';

import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';


export default [
  {
    path: '/',
    tabId: 'homepage',
    component: HomePage,
  },
  {
    path: '/profile/',
    tabId: 'profilepage',
    component: ProfilePage,
  },
  {
    path: '/basket/',
    tabId: 'basketpage',
    component: BasketPage,
  },
  {
    path: '/want/',
    tabId: 'wantpage',
    component: WantPage,
  },
  {
    path: '/about/',
    tabId: 'aboutpage',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
