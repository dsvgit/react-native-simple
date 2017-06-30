import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Icon } from 'react-native-elements';

import { toggleDrawer } from '../../../../drawer';
import TabsDemo from '../../../tabsDemo/components/main';
import ControlsDemo from '../../../controlsDemo/components/main';
import ButtonsDemo from '../../../buttonsDemo/components/main';

const BurgerMenuIcon = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name='dehaze'
            onPress={() => toggleDrawer()}
            style={{paddingLeft: 15}} />
    </View>
  );
};

export default StackNavigator({
  ButtonsDemo: {
    screen: ButtonsDemo,
    navigationOptions: {
      title: 'Buttons',
      headerLeft: <BurgerMenuIcon />
    }
  },
  ControlsDemo: {
    screen: ControlsDemo,
    navigationOptions: {
      title: 'Controls',
      headerLeft: <BurgerMenuIcon />
    }
  },
  TabsDemo: {
    screen: TabsDemo,
    navigationOptions: {
      title: 'Tabs',
      headerLeft: <BurgerMenuIcon />
    }
  }
});
