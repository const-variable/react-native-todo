import React from 'react';
import {connect} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import TabStack from '../TabStack';

const Stack = createStackNavigator();

class Auth extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const {userToken, isSignout} = this.props;

    // if (userToken) {
    //   return <TabStack />;
    // }

    return (
      <Stack.Navigator
        screenOptions={{
          title: 'Todo App',
          animationTypeForReplace: isSignout ? 'push' : 'pop',
        }}
        initialRouteName={userToken ? 'TodoApp' : 'SignIn'}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="TodoApp" component={TabStack} />
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

export default connect(mapStateToProps, null)(Auth);
