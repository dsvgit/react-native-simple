import Expo from 'expo';
import React, { Component as C } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Navigator from './children/navigator/components/main';
import Drawer from './children/drawer/components/main';

class App extends C {
  render() {
    return (
      <Provider store={store}>
        <Drawer>
          <View style={styles.appView}>
            <Navigator />
          </View>
        </Drawer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#fff'
  }
});

export default App;
