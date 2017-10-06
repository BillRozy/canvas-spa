import VueRouter from 'vue-router';
import About from 'components/global/about.vue';
import Doorman from 'components/global/doorman.vue';
import Catalog from 'components/global/catalog.vue';
import Events from 'components/global/events.vue';

const routes = [
  { path: '/', component: Doorman },
  { path: '/about', component: About },
  { path: '/catalog', component: Catalog },
  { path: '/events', component: Events },
];
const router = new VueRouter({
  routes,
});

export default router;
