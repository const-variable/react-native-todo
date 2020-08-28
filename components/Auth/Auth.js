/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {connect} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import TabStack from '../TabStack/TabStack';
import {tryLocalSignIn} from '../../redux/actions';

import DrawerContent from '../DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class Auth extends React.Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    const {tryLocalSignInAction} = this.props;
    tryLocalSignInAction();
  }

  render() {
    const {userToken, isSignout} = this.props;

    if (userToken) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={TabStack} />
        </Drawer.Navigator>
      );
    }

    return (
      <Stack.Navigator
        screenOptions={{
          title: 'Todo App',
          animationTypeForReplace: isSignout ? 'push' : 'pop',
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  const {userToken, isSignout} = state.todoReducer;

  return {
    userToken,
    isSignout,
  };
};

export default connect(mapStateToProps, {
  tryLocalSignInAction: tryLocalSignIn,
})(Auth);
