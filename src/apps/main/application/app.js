import _ from 'lodash';
import React, { Component as C } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import store from './store';
import Dashboard from '../application/children/dashboard/components/main';

class App extends C {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
