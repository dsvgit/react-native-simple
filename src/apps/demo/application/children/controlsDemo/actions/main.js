import actionTypes from '../constants/actionTypes';

export function changeField(payload) {
  return dispatch => {
    return dispatch({ type: actionTypes.CHANGE_FIELD, payload });
  }
}
