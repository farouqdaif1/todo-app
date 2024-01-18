import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
import store from "../../store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default AuthStackNavigator;
