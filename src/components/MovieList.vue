<template>
  <div class="movie-list">
    <div class="movie-list__filters">
      Filter by:
      <label v-for="filter in filters" :key="filter">
        {{filter}}
        <input type="checkbox" :value="filter" v-model="selectedFilters">
      </label>
    </div>
    <div v-if="!isLoading" class="movie-list__items">
      <MovieListItem
        v-for="(movie, i) in filteredMovies"
        :key="movie.imdbID + i"
        :movie="movie"
        />
    </div>
    <ThePreloader v-else dataName="Movie list" />
    <button @click="getMoreMovie(currentPage + 1)" class="movie-list__add-more" id="load-more">
      Load page {{currentPage + 1}}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MoviesStore from '@/store/movies';
import MovieListItem from './MovieListItem.vue';
import ThePreloader from './ThePreloader.vue';
import { Movie } from '../services/types';

type Data = {isLoading: boolean; filters: string[]; selectedFilters: string[]};
export default Vue.extend({
  name: 'MovieList',
  data(): Data {
    return {
      isLoading: true,
      filters: ['series', 'movie', 'game'],
      selectedFilters: [],
    };
  },
  async created() {
    if (!this.movieList.length) {
      await this.getMovieList();
    }
    this.isLoading = false;
  },
  computed: {
    ...MoviesStore.mapGetters(['movieList', 'currentPage']),
    filteredMovies(): Movie[] {
      if (!this.selectedFilters.length) return this.movieList;
      return this.movieList.filter((m: Movie) => this.selectedFilters.includes(m.Type));
    },
  },
  methods: {
    ...MoviesStore.mapActions(['getMovieList', 'getMoreMovie']),
  },
  components: {
    MovieListItem,
    ThePreloader,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;

  &__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__filters {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 30px;

    label {
      cursor: pointer;
      margin-left: 20px;
    }
  }

  &__add-more {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 200px;
    height: 40px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    box-shadow: none;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background .3s;
    outline: none;

    &:hover {
      background: rgba(#000, .7);
    }
  }
}
</style>
