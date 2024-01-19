import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigator";
import HomeStackNavigator from "./home-stack-navigator";
const Navigation = () => {
  const user = false;

  return (
    <NavigationContainer>
      {user ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
