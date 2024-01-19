import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { useDispatch } from 'react-redux';
import { signin } from '../../../store/actions/authActions.js';
const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    const formData = { email, password};
    // You can add authentication logic here
        dispatch(signin(formData))

  };

  return (
    <View style={styles.signInScreen}>
      <Text>Sign In Screen</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {/* Sign In Button */}
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Sign In</Text>
      </Pressable>
      {/* Navigate to Sign Up Button */}
      <Pressable style={styles.button} onPress={navigateToSignUp}>
        <Text style={styles.text}>Navigate to Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signInScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default SignInScreen;
