import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import { List, ListItem } from 'react-native-elements';

import { navigate } from '../../../../navigation';

let Content = props => {
  return (
    <View style={styles.contentView}>
      <List>
        <ListItem title="Controls" hideChevron={true} onPress={() => navigate({ routeName: 'ControlsDemo' })} />
        <ListItem title="Buttons" hideChevron={true} onPress={() => navigate({ routeName: 'ButtonsDemo' })} />
        <ListItem title="Tabs" hideChevron={true} onPress={() => navigate({ routeName: 'TabsDemo' })} />
      </List>
    </View>
  );
}

let MainComponent = props => {
  let { children } = props;

  return (
    <Drawer
      type="static"
      content={<Content />}
      openDrawerOffset={100}
      open={false}
      panOpenMask={0.10}
      tweenHandler={Drawer.tweenPresets.parallax} >
        {children}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#fff'
  }
});

export default MainComponent;
