import { StyleSheet, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Camera from "../screens/CameraPage";
import Profile from "../screens/Profile";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Camera') {
            iconName = 'camera-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          const iconColor = focused ? '#5C8D89' : '#A7D7C5'; // Change default color here

          if (route.name === 'Camera') {
            const circleSize = size * 2.5; // Adjust size if needed

            return (
              <View style={{ width: size, height: size }}>
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: "#5C8D89", // Circle color
                    width: circleSize,
                    height: circleSize,
                    borderRadius: circleSize / 2, // Make it a circle
                    bottom: -size * 0.5, // Adjust vertical position
                    right: size * 0.5 - circleSize / 2, // Centered horizontally
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name={iconName} size={size * 1.3} color={iconColor} />
                </View>
              </View>
            );
          }

          return <Icon name={iconName} size={size} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNav;
