<template functional>
  <router-link :to="`movies/${props.movie.imdbID}`" class="movie-list__item">
    {{ props.movie.Title }} {{props.movie.Type}}
  </router-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

import { Movie } from '@/services/types';

export default Vue.extend({
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
    } as PropOptions<Movie>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list__item {
  text-decoration: none;
  color: #000;
  position: relative;
  padding: 5px 5px 5px 15px;
  cursor: pointer;
  transition: color .3s;

  &:hover {
    color: #42b983;

    &:after {
      background: #42b983;
    }
  }

  &:after {
    width: 6px;
    height: 6px;
    content: '';
    position: absolute;
    background: #000;
    left: 0;
    top: 12px;
    border-radius: 50%;
  }
}
</style>
