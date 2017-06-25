import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInput, View, Button, Text } from 'react-native';

import * as widgetActions from '../../actions/widgetActions';

function generateId() {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

let Todo = props => {
  let { todo } = props;

  return (
    <Text>{todo}</Text>
  );
};

let Todos = props => {
  let {
    children
  } = props;

  return (
    <View>
      <View>
        {children}
      </View>
    </View>
  );
};

let Toolbar = props => {
  let {
    title,
    addTodo,
    changeTitle
  } = props;

  return (
    <View>
      <TextInput value={title}
               onChangeText={(v) => { changeTitle(v) }} />
      <Button
        onPress={() => addTodo(title)}
        title="add"
      />
    </View>
  );
}

let ToolbarContainer = connect(
  state => {
    let props = {
      title: state.title
    };

    return props;
  },
  dispatch => {
    let actions = _.pick(widgetActions, [
      'changeTitle',
      'addTodo'
    ]);

    return bindActionCreators(actions, dispatch);
  }
)(Toolbar);

let TodoList = props => {
  let {
    todos
  } = props;

  return (
    <Todos>
      {todos.map(todo => {
        return (
          <Todo todo={todo} key={generateId()}/>
        );
      })}
    </Todos>
  );
}

let TodoListContainer = connect(
  state => {
    let props = {
      todos: state.todos
    };

    return props;
  }
)(TodoList);

let TodoWidget = props => {
  return (
    <View>
      <ToolbarContainer />
      <TodoListContainer />
    </View>
  );
}

export default TodoWidget;
