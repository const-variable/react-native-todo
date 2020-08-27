import React, {useState} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {signIn} from '../../redux/actions';

import Colors from '../../config/colors';

class SignInScreen extends React.PureComponent {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  state = {
    userName: '',
    password: '',
  };

  handleFieldChange = (fieldName) => (input) => {
    this.setState({
      [fieldName]: input,
    });
  };

  handleSignIn = () => {
    const {signInAction, navigation} = this.props;
    const {userName, password} = this.state;

    if (!userName || !password) {
      return null;
    }
    signInAction(userName, password);
    navigation.navigate('TodoApp');
  };

  render() {
    const {signInAction, navigation} = this.props;
    const {userName, password} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.headingText}> Welcome to Todo App</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={userName}
              onChangeText={this.handleFieldChange('userName')}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={password}
              onChangeText={this.handleFieldChange('password')}
              secureTextEntry
            />
          </View>
          <Button title="Sign in" onPress={this.handleSignIn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    alignItems: 'flex-end',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  headingText: {
    color: Colors.darkBlue,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  inputContainer: {
    marginVertical: 5,
    height: 45,
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    borderRadius: 3,
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
  },
});

export default connect(null, {
  signInAction: signIn,
})(SignInScreen);
