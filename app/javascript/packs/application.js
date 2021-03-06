/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import router from '../router/router.js';
Vue.router = router;
// import Vue2TouchEvents from 'vue2-touch-events';
import App from 'app.vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = '';
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/devise.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

// Vue.use(Vue2TouchEvents);
console.log('BeforeDOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
  const token = document.getElementsByName('csrf-token')[0].getAttribute('content');
  axios.defaults.headers.common['X-CSRF-Token'] = token;
  axios.defaults.headers.common.Accept = 'application/json';
  const app = new Vue(App).$mount('#spa');
  //
  // console.log(app);
  // console.log('DOMContentLoaded');
  // window.app = new Vue({
  //   el: '#spa',
  //   router,
  //   mounted() {
  //     console.log('Vue mounted!');
  //   },
  //   components: {
  //     About, Catalog, Doorman, Events,
  //   },
  // });
});
