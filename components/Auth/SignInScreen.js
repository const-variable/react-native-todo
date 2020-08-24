import React, {useState} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {signIn} from '../../redux/actions';

import Colors from '../../config/colors';

const SignInScreen = ({signInAction}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}> Welcome to Todo App</Text>
      <View style={styles.bodyContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Button
          title="Sign in"
          onPress={() =>
            username && password && signInAction(username, password)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headingText: {
    color: Colors.darkBlue,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  bodyContainer: {
    marginTop: 20,
    marginHorizontal: 50,
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
