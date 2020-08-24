import React from 'react';
import {connect} from 'react-redux';

import {signOut} from '../../redux/actions';

import {Button} from 'react-native';

const SignoutButton = ({signOutAction}) => {
  return <Button title="Sign out" onPress={signOutAction} />;
};

export default connect(null, {
  signOutAction: signOut,
})(SignoutButton);
