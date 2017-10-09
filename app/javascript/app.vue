<template lang="pug">
main
  canvas-header
  transition
    keep-alive
      router-view
</template>

<script>
import CanvasHeader from 'components/global/canvas-header.vue';
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
    About, Catalog, Doorman, Events, CanvasHeader,
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
}
main {
  height: 100%;
  width: 100%;
}
</style>
