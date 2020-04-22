import { Module, createStore, createMapper } from 'vuex-smart-module';
import Vue from 'vue';
import Vuex from 'vuex';
import RootState from './root/state';
import RootGetters from './root/getters';
import RootMutations from './root/mutations';
import RootActions from './root/actions';
import MoviesStore from './movies/index';

Vue.use(Vuex);

export const root = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {
    movies: MoviesStore,
  },
});
export const RootStore = createMapper(root);

export default createStore(root);
