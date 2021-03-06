import { Actions } from 'vuex-smart-module';
import RootState from './state';
import RootGetters from './getters';
import RootMutations from './mutations';

export default class RootActions extends Actions<
  RootState,
  RootGetters,
  RootMutations,
  RootActions
> {
  // RootActions
}