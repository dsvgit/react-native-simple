import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import Navigator from './navigator';

const MainComponent = props => {
  let { dispatch, nav } = props;

  return (
    <Navigator navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: nav,
    })} />
  );
}

const MainContainer = connect(
  state => {
    let props = {
      nav: state.nav
    };

    return props;
  }
)(MainComponent);

export default MainContainer;
