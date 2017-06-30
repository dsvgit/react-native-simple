import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { navigate } from '../../../../navigation';
import { toggleDrawer } from '../../../../drawer';
import Title from '../../../../../components/title/main';

export default props => {
  let onPress = () => {
    toggleDrawer({ open: true });
  }

  return (
    <View style={{paddingLeft: 10, paddingRight: 10}}>
      <Text>Simple button: </Text>
      <Button
        buttonStyle={{height: 40}}
        icon={{name: 'cached'}}
        title='Click me!'
        onPress={onPress} />
    </View>
  );
}
