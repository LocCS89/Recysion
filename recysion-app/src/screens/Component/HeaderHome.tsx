import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install 'expo-vector-icons'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigations/types"; // Import the type
import SimpleHeader from './SimpleHeader';

type MainScreenProps = {
  // Remove the navigation prop
};

const HeaderHome: React.FC<MainScreenProps> = () => {
  const navigation = useNavigation(); // Get the navigation object using useNavigation hook

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../img/logo2.png')} 
        style={styles.icon}
      />
      <Text style={styles.headerText}>Recysion</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={24} color="white" onPress={() => navigation.navigate('Messenger')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color="white" onPress={() => navigation.navigate('Setting')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#74B49B', // Recycling theme color
    paddingHorizontal: 10,
    marginTop :0,
    height: 100,
    paddingTop: 60
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: -14
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginStart: -100
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    paddingHorizontal: 10,
  },
});

export default HeaderHome;
