import * as Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { createStore } from 'vuex-smart-module'

import MovieList from '@/components/MovieList.vue';
import {root} from '@/store';

const localVue = createLocalVue()
localVue.use(Vuex)

it('works load more movies', () => {
  const store = createStore(root);

  const wrapper = shallowMount(MovieList, { store, localVue });
  wrapper.find('button').trigger('click');
})