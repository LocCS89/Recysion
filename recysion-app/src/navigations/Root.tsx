import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "../store";
import ErrorOverlay from "../components/ErrorOverlay";
import Home from "../screens/Home";
import Find from "../screens/HomeScreen/Find";
import DIY from "../screens/HomeScreen/DIY";
import Items from "../screens/HomeScreen/Items";
import Blogs from "../screens/HomeScreen/Blogs";
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";
import { Ionicons } from "@expo/vector-icons";
import Setting from "../screens/Setting";
import Messenger from "../screens/Messenger";

const Stack = createNativeStackNavigator();



const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  
  const headerOptions = {
    headerStyle: {
      backgroundColor: "#5C8D89", // Main color
    },
    headerTintColor: "white", // Text color
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };



  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Show header for all screens
        }}
      >
        {!user ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="TabNav" component={TabNav} />
        )}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Find" component={Find} />
        <Stack.Screen name="DIY" component={DIY} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Messenger" component={Messenger} />
      </Stack.Navigator>
      <ErrorOverlay />
    </NavigationContainer>
  );
};

export default Root;

const styles = StyleSheet.create({});