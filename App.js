import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TodoHome from './components/TodoHome';
import TodoList from './components/TodoList';
import Settings from './components/Settings';

import Colors from './config/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.darkBlue,
          inactiveTintColor: Colors.fadedBlue,
          labelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={TodoStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <Icon name="cog-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
