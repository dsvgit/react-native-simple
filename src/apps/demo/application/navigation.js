import store from './store';
import { navigate as navigateAction } from './children/navigator/actions/main';

export function navigate(...args) {
  store.dispatch(navigateAction(...args));
}
