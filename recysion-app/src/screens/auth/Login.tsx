import { Pressable, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button } from "native-base";
import React, { useState } from 'react';

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  function onSignUp() {
    navigation.navigate("SignUp");
  }
  function onLoggedIn() {
    dispatch(setUser());
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../img/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Login / Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={onLoggedIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  // return (
  //   <View>
  //     <Text>Login</Text>
  //     <Button onPress={onSignUp}>Sign Up</Button>
  //     <Button onPress={onLoggedIn}>Login</Button>
  //   </View>
  // );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F4',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 100,
  },
  formContainer: {
    backgroundColor: '#A7D7C5',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5C8D89',
  },
  input: {
    backgroundColor: '#74B49B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5C8D89',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});