import actionTypes from '../constants/actionTypes';

export function toggle(payload) {
  return dispatch => {
    return dispatch({ type: actionTypes.TOGGLE, payload });
  }
}
