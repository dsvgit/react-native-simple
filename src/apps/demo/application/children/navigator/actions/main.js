import actionTypes from '../constants/actionTypes';

export function navigate(payload) {
  return { type: actionTypes.NAVIGATE, payload };
}
