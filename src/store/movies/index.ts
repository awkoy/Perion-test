import { Module } from 'vuex-smart-module'
import MoviesState from './state';
import MoviesGetters from './getters';
import MoviesMutations from './mutations';
import MoviesActions from './actions';

export default new Module({
  state: MoviesState,
  getters: MoviesGetters,
  mutations: MoviesMutations,
  actions: MoviesActions
})