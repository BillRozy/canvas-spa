<template>
  <transition>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script>
import router from 'router/router';
import About from 'components/global/about.vue';
import Catalog from 'components/global/catalog.vue';
import Doorman from 'components/global/doorman.vue';
import Events from 'components/global/events.vue';
export default {
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  router,
  components: {
    About, Catalog, Doorman, Events,
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
