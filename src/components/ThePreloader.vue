<template>
  <div class="preloader">
    <div>{{dataName}} loading...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ThePreloader',
  props: {
    dataName: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preloader {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #fff;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    font-size: 30px;
}
</style>
