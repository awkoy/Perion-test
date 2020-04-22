import axios, { AxiosInstance } from 'axios';
import { MovieDetail } from './types';

class MovieService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://www.omdbapi.com/',
    });
  }

  public async getMovieList(apikey: string, page = 1) {
    const result = await this.axiosInstance.get('/', {
      params: {
        s: 'Batman',
        page,
        apikey,
      },
    });

    return {
      result: result.data.Search,
      numberOfResult: result.data.totalResults,
    };
  }

  public async getMovieDetail(apikey: string, id: string): Promise<MovieDetail> {
    const result = await this.axiosInstance.get('/', {
      params: {
        i: id,
        apikey,
        plot: 'full',
      },
    });

    return result.data;
  }
}

const movieService = new MovieService();

export default {
  movieService,
};
