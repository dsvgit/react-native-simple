import store from './store';
import { toggle as toggleAction } from './children/drawer/actions/main';

export function toggleDrawer(...args) {
  store.dispatch(toggleAction(...args));
}
