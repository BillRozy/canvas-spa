<template lang="pug">
  .doorman
    transition
      keep-alive
        photostart(v-if="onPhotoPage")
        videostart(v-if="!onPhotoPage")

</template>
<script>
import Photostart from 'components/global/photostart.vue';
import Videostart from 'components/global/videostart.vue';
import axios from 'axios';
export default {
  name: '',
  data: () => ({
    onPhotoPage: true,
  }),
  components: {
    Photostart, Videostart,
  },
  mounted() {
    axios.get('/api/doormanprices')
      .then(responce => {
        console.log(responce);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss" scoped>
  .doorman{
    width: 100%;
    height: calc(100% - 60px);
    background: red;
  }
</style>
