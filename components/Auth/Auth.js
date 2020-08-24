import React from 'react';
import {connect} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import TabStack from '../TabStack';

const Stack = createStackNavigator();

class Auth extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const {userToken, isSignout} = this.props;

    if (userToken) {
      return <TabStack />;
    }

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign In',
            animationTypeForReplace: isSignout ? 'pop' : 'pop',
          }}
        />
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
