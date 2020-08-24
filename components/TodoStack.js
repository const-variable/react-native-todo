import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TodoHome from './TodoHome';
import TodoList from './TodoList';

const Stack = createStackNavigator();

const TodoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TodoHome}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Details"
        component={TodoList}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default TodoStack;
