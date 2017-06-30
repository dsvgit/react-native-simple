import _ from 'lodash';
import { Record, Set } from 'immutable';

import actionTypes from '../constants/actionTypes';

const StateRecord = Record({
  open: false
});

const defaultState = new StateRecord();

let reducer = (state = defaultState, action) => {
  let result = _.result({
    [actionTypes.TOGGLE]: () => {
      let open = _.get(action, 'payload.open');
      if (open == null) {
        return state.set('open', !state.open);
      }

      return state.set('open', open);
    }
  }, action.type, () => state);

  return result;
};

export default reducer;
