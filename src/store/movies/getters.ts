import { Getters } from 'vuex-smart-module';
import MoviesState from './state';

export default class MoviesGetters extends Getters<MoviesState> {
  get movieList() {
    return this.state.movieList;
  }

  get movieDetail() {
    return this.state.movieDetail;
  }

  get currentPage() {
    return this.state.currentPage;
  }
}
