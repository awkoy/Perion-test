import { Actions } from 'vuex-smart-module';
import { Store } from 'vuex';
import MovieService from '@/services/MovieService';
import { AppState } from '../types';
import MoviesState from './state';
import MoviesGetters from './getters';
import MoviesMutations from './mutations';

export default class MoviesActions extends Actions<
  MoviesState,
  MoviesGetters,
  MoviesMutations,
  MoviesActions
> {
  private apikey = '';

  $init(store: Store<AppState>): void {
    this.apikey = store.state.user.apiToken;
  }

  async getMovieList() {
    const { result } = await MovieService.movieService.getMovieList(this.apikey);
    this.commit('setMovieList', { result });
  }

  async getMoreMovie(page: number) {
    const { result } = await MovieService.movieService.getMovieList(this.apikey, page);
    this.commit('updateMovieList', { result, page });
  }

  async getMovieDetail(id: string) {
    const movie = await MovieService.movieService.getMovieDetail(this.apikey, id);
    this.commit('setMovieDetail', { movie });
  }
}
