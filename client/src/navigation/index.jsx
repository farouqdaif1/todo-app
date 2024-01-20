import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth-stack-navigator";
import HomeStackNavigator from "./home-stack-navigator";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navigation = () => {
  const userState = useSelector((state) => state.auth.authData);
  const [user, setUser] = useState(null);
  const loadUserFromStorage = async () => {
    try {
      const storedUserJSON = await AsyncStorage.getItem("profile");
      const storedUser = JSON.parse(storedUserJSON);
      setUser(storedUser);
    } catch (error) {
      console.error("Error loading user from AsyncStorage:", error);
    }
  };
  useEffect(() => {
    loadUserFromStorage();
  }, [user]);

  return (
    <NavigationContainer>
      {user || userState ? (
        <HomeStackNavigator  />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
