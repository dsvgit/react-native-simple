import _ from 'lodash';
import { Record, Set } from 'immutable';

import actionTypes from '../constants/actionTypes';

const StateRecord = Record({
  name: '',
  subscribe: false,
});

const defaultState = new StateRecord();

let reducer = (state = defaultState, action) => {
  let result = _.result({
    [actionTypes.CHANGE_FIELD]: () => {
      let { name, value } = action.payload;
      let availableFields = ['name', 'subscribe'];

      if (!_.includes(availableFields, name)) {
        return state;
      }

      return state.set(name, value);
    }
  }, action.type, () => state);

  return result;
};

export default reducer;
