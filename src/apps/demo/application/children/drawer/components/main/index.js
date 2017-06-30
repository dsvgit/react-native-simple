import Expo from 'expo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import { List, ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import { navigate } from '../../../../navigation';
import { toggleDrawer } from '../../../../drawer';

function onMenuItemPress({routeName}) {
  navigate({ routeName });
  toggleDrawer({ open: false });
}

let Content = props => {
  return (
    <View style={styles.contentView}>
      <View style={{paddingTop: 15, paddingLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
        <Avatar
          small
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7} />
        <Text h3 style={{paddingLeft: 10}}>Ivanova Natalya</Text>
      </View>
      <List>
        <ListItem title="Controls" hideChevron={true} onPress={() => onMenuItemPress({ routeName: 'ControlsDemo' })} />
        <ListItem title="Buttons" hideChevron={true} onPress={() => onMenuItemPress({ routeName: 'ButtonsDemo' })} />
        <ListItem title="Tabs" hideChevron={true} onPress={() => onMenuItemPress({ routeName: 'TabsDemo' })} />
      </List>
    </View>
  );
}

let MainComponent = props => {
  let { children, open, toggle } = props;

  return (
    <Drawer
      type="static"
      content={<Content />}
      tapToClose={true}
      openDrawerOffset={100}
      open={open}
      panOpenMask={0.10}
      tweenHandler={Drawer.tweenPresets.parallax}
      onOpenStart={() => toggleDrawer({ open: true })}
      onCloseStart={() => toggleDrawer({ open: false })} >
        {children}
    </Drawer>
  );
}

let MainContainer = connect(
  state => {
    let props = {
      open: state.drawer.open
    };

    return props;
  }
)(MainComponent);

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#fff'
  }
});

export default MainContainer;
