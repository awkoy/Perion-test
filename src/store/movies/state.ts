import { Movie, MovieDetail } from '@/services/types';

export default class MoviesState {
  movieList: Movie[] = [];

  movieDetail = {} as MovieDetail;

  currentPage = 1;
}
