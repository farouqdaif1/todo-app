import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", username);
    // You can add registration/authentication logic here
  };

  return (
    <View style={styles.signUpScreen}>
      <Text>Sign Up Screen</Text>
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
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

      {/* Sign Up Button */}
      <Pressable style={styles.button} onPress={handleSignUp}>
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>

      {/* Navigate to Sign In Button */}
      <Pressable style={styles.button} onPress={navigateToSignIn}>
        <Text style={styles.text}>Navigate to Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpScreen: {
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
  
});

export default SignUpScreen;
