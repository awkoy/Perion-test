import { Getters } from 'vuex-smart-module';
import RootState from './state';

export default class RootGetters extends Getters<RootState> {
  get user() {
    return this.state.user;
  }
}
