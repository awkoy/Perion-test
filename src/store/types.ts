import { MovieDetail } from './../services/types';
import { Movie } from '@/services/types';

export type AppState = {
    user: RootState;
    movies: MoviesState;
}

type RootState = {
    name: string,
    apiToken: string,
}

type MoviesState = {
    movieList: Movie[];
    movieDetail: MovieDetail;
    currentPage: number;
}