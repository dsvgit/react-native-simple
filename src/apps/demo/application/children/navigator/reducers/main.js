import { NavigationActions } from 'react-navigation';

import actionTypes from '../constants/actionTypes';
import Navigator from '../components/main/navigator';

const initialState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ButtonsDemo' }));

const navReducer = (state = initialState, action) => {
  let nextState;
  if (action.type == actionTypes.NAVIGATE) {
    nextState = Navigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: action.payload.routeName }),
      state
    );
  } else {
    nextState = Navigator.router.getStateForAction(action, state);
  }

  return nextState || state;
};

export default navReducer;
