import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import {signUp} from '../../redux/actions';

import Colors from '../../config/colors';

const SignUpScreen = ({signUpAction, navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.headingText}>
            Sign up to <Text style={styles.todoText}> Todo App </Text>, today!
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="First name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={userName}
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
            title="Sign Up"
            onPress={() =>
              signUpAction(firstName, lastName, userName, password)
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todoText: {
    color: Colors.slateBlue,
    fontWeight: '800',
  },
  headerContainer: {
    alignItems: 'flex-end',
  },
  headingText: {
    color: Colors.darkBlue,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 22,
    fontWeight: '600',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
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
  signUpAction: signUp,
})(SignUpScreen);
