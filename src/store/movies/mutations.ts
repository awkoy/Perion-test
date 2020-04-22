import { Movie, MovieDetail } from '@/services/types';
import { Mutations } from 'vuex-smart-module';
import MoviesState from './state';

export default class MoviesMutations extends Mutations<MoviesState> {
  setMovieList(payload: {result: Movie[]}) {
    this.state.movieList = payload.result;
  }

  updateMovieList(payload: {result: Movie[], page: number}) {
    this.state.movieList = [...this.state.movieList, ...payload.result];
    this.state.currentPage = payload.page;
  }

  setMovieDetail(payload: {movie: MovieDetail}) {
    this.state.movieDetail = payload.movie;
  }
}
