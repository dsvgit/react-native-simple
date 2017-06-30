import _ from 'lodash';
import React from 'react';
import { View, Text, TextInput, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Title from '../../../../../components/title/main';
import * as actions from '../../actions/main';

let now = new Date();

let DateTimePicker = props => {
  let { mode, format } = props;

  return (
    <DatePicker
      style={{width: 200}}
      date={now}
      mode={mode}
      placeholder="select date"
      format={format}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {}}
    />
  );
}

let MainComponent = props => {
  let { name, subscribe, changeField } = props;

  return (
    <View>
      <Card title="Text input">
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                   onChangeText={value => changeField({ name: 'name', value })}
                   value={name} />
      </Card>
      <Card title="Switch">
        <View>
          <Switch style={{width: 50}}
                  value={subscribe}
                  onValueChange={value => changeField({ name: 'subscribe', value })} />
        </View>
      </Card>
      <Card title="Date">
        <Text>Date: </Text>
        <DateTimePicker mode="date" format="YYYY-MM-DD" />
        <Text>Time: </Text>
        <DateTimePicker mode="time" format="h:mm:ss a" />
        <Text>Datetime: </Text>
        <DateTimePicker mode="datetime" format="YYYY-MM-DD h:mm:ss a" />
      </Card>
    </View>
  );
};

let MainContainer = connect(
  state => {
    let props = {
      name: state.controlsDemo.name,
      subscribe: state.controlsDemo.subscribe
    };

    return props;
  },
  dispatch => {
    let filteredActions = _.pick(actions, [
      'changeField'
    ]);

    return bindActionCreators(filteredActions, dispatch);
  }
)(MainComponent);

export default MainContainer;
