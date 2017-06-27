import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Title from '../../../../../components/title/main';
import Screen1 from '../../children/screen1/components/main';
import Screen2 from '../../children/screen2/components/main';

let Tabs = TabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      tabBarLabel: 'Screen 1'
    }
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      tabBarLabel: 'Screen 2'
    }
  }
});

export default props => {
  return (
    <View style={styles.appView}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
});
