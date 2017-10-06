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
import App from 'app.vue';
Vue.use(VueRouter);
console.log('BeforeDOMContentLoaded');
document.addEventListener('DOMContentLoaded', () => {
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
