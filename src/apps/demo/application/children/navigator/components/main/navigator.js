import React from 'react';
import { StackNavigator } from 'react-navigation';

import TabsDemo from '../../../tabsDemo/components/main';
import ControlsDemo from '../../../controlsDemo/components/main';
import ButtonsDemo from '../../../buttonsDemo/components/main';

export default StackNavigator({
  ButtonsDemo: {
    screen: ButtonsDemo,
    navigationOptions: {
      title: 'Buttons'
    }
  },
  ControlsDemo: {
    screen: ControlsDemo,
    navigationOptions: {
      title: 'Controls'
    }
  },
  TabsDemo: {
    screen: TabsDemo,
    navigationOptions: {
      title: 'Tabs'
    }
  }
});
