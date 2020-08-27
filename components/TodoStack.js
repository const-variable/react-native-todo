import React from 'react';
import {connect} from 'react-redux';

import _get from 'lodash.get';
import {createStackNavigator} from '@react-navigation/stack';

import TodoHome from './TodoHome';
import TodoList from './TodoList';

import Colors from '../config/colors';

const Stack = createStackNavigator();

const TodoStack = ({loggedInUser}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.cream,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={TodoHome}
        options={{
          title: `Hi, ${loggedInUser}`,
        }}
      />
      <Stack.Screen
        name="Details"
        component={TodoList}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const userName = _get(state, 'todoReducer.userName');
  return {
    loggedInUser: userName,
  };
};

export default connect(mapStateToProps, null)(TodoStack);
