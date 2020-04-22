<template>
  <div v-if="!isLoading" class="movie-view">
    <div class="movie-view__poster">
      <img :src="movieDetail.Poster" alt="Movie poster">
    </div>
    <div class="movie-view__content">
      <h1 class="movie-view__title">{{movieDetail.Title}}</h1>
      <div class="movie-view__info">
        <div class="movie-view__info-item">
          <span>Year:</span> {{movieDetail.Year}}
        </div>
        <div class="movie-view__info-item">
          <span>Genre:</span> {{movieDetail.Genre}}
        </div>
        <div class="movie-view__info-item">
          <span>Time:</span> {{movieDetail.Runtime}}
        </div>
        <div class="movie-view__info-item">
          <span>Type:</span> {{movieDetail.Type}}
        </div>
        <div class="movie-view__info-item">
          <span>Description:</span> {{movieDetail.Plot}}
        </div>
      </div>
    </div>
  </div>
  <ThePreloader v-else dataName="Movie datails"/>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import MoviesStore from '@/store/movies';
import { RootStore } from '@/store';
import ThePreloader from '@/components/ThePreloader.vue';

export default Vue.extend({
  name: 'MovieView',
  props: {
    movieId: {
      type: String,
    } as PropOptions<string>,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...RootStore.mapGetters(['user']),
    ...MoviesStore.mapGetters(['movieDetail']),
  },
  methods: {
    ...MoviesStore.mapActions(['getMovieDetail']),
    async loadMovieData() {
      if (this.movieId !== this.movieDetail.imdbID) {
        await this.getMovieDetail(this.movieId);
      }
      this.isLoading = false;
    },
  },
  watch: {
    movieId: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.loadMovieData();
        }
      },
    },
  },
  components: {
    ThePreloader,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-view {
  display: flex;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-top: 40px;

  &__poster {
    display: block;
    background: #000;
    min-width: 300px;
    position: relative;

    img {
      display: block;
      max-width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &__content {
    padding-left: 50px;
  }

  &__title {
    position: relative;
    margin: 10px 0;
  }

  &__info-item {
    margin-bottom: 4px;

    span {
      font-weight: bold;
    }
  }
}
</style>
