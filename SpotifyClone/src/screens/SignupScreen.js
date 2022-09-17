import IconMovie from '@expo/vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {ThemeContext} from '../context/theme';

const SignupScreen = props => {
  const {theme} = useContext(ThemeContext);

  const [username, setUserName] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [mail, setMail] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function navigateLoginScreen() {
    navigation.navigate('LoginScreen');
  }

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username,
      password,
      mail,
    }),
  };
  const handleSignup = () => {
    fetch('http://10.0.2.2:3000/users', requestOptions);

    setPassword('');
    setPasswordAgain('');
    setUserName('');
    setMail('');
    showMessage({
      message: 'Signed up successfully',
      type: 'success',
    });
    navigateLoginScreen();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
        <IconMovie
          style={styles.iconMovieStyle}
          color={theme.fontColor}
          size={100}
          name="movie"
        />

        <TextInput
          value={username}
          onChangeText={usernameNew => setUserName(usernameNew)}
          placeholder="Username"
          placeholderTextColor={theme.fontColor}
          style={[
            styles.textInput,
            {borderColor: theme.fontColor, color: theme.fontColor},
          ]}
        />

        <TextInput
          value={mail}
          onChangeText={mailNew => setMail(mailNew)}
          placeholder="Mail"
          placeholderTextColor={theme.fontColor}
          style={[
            styles.textInput,
            {borderColor: theme.fontColor, color: theme.fontColor},
          ]}
        />

        <TextInput
          secureTextEntry
          value={password}
          onChangeText={passwordNew => setPassword(passwordNew)}
          placeholder="Password"
          placeholderTextColor={theme.fontColor}
          style={[
            styles.textInput,
            {borderColor: theme.fontColor, color: theme.fontColor},
          ]}
        />

        <TextInput
          secureTextEntry
          value={passwordAgain}
          onChangeText={passwordAgainNew => setPasswordAgain(passwordAgainNew)}
          placeholder="Password Again"
          placeholderTextColor={theme.fontColor}
          style={[
            styles.textInput,
            {borderColor: theme.fontColor, color: theme.fontColor},
          ]}
        />
        <View style={[styles.buttonStyle, {borderColor: theme.fontColor}]}>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={[styles.buttonTextStyle, {color: theme.fontColor}]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={navigateLoginScreen}>
          <Text style={[styles.signUpTextStyle, {color: theme.active}]}>
            Have an account? LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  textInput: {
    padding: 10,
    width: 270,
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
  },
  buttonStyle: {
    borderWidth: 2,
    width: 270,
    height: 50,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  iconMovieStyle: {
    marginTop: 100,
  },
  signUpTextStyle: {
    color: 'blue',
  },
});
export default SignupScreen;
