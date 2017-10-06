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
import router from 'router/router';
import About from 'components/global/about.vue';
import Catalog from 'components/global/catalog.vue';
import Doorman from 'components/global/doorman.vue';
import Events from 'components/global/events.vue';
Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  window.app = new Vue({
    el: '#spa',
    router,
    mounted() {
      console.log('Vue mounted!');
    },
    components: {
      About, Catalog, Doorman, Events,
    },
  });
});
