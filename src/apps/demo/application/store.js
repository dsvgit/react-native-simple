import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import controlsDemo from './children/controlsDemo/reducres/main';
import nav from './children/navigator/reducers/main';
import drawer from './children/drawer/reducers/main';

export default createStore(
  combineReducers({
    controlsDemo,
    nav,
    drawer
  }),
  applyMiddleware(thunk)
);
