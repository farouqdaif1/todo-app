import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
const Stack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
  );
};

export default AuthStackNavigator;
