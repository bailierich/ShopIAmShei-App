import { View, Text } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import BookingScreen from "../clientscreens/BookingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../clientscreens/SignUpScreen";
import SignUpScreenCont from "../clientscreens/SignUpScreenCont";
import ClientHomeScreen from "../clientscreens/ClientHomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={ClientHomeScreen} name="Sign Up Screen" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
