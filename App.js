import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

// import MainApp from './src/apps/main/application/app';
import DemoApp from './src/apps/demo/application/app';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.appView}>
        <DemoApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000'
  }
});
