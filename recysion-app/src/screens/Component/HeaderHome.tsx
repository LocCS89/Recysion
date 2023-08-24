import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MainScreenProps = {};

const HeaderHome: React.FC<MainScreenProps> = () => {
  const navigation = useNavigation();
  
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../../../img/logo2.png')} 
          style={[styles.icon, { width: windowWidth * 0.1, height: windowWidth * 0.1 }]}
        />
        <Text style={styles.headerText}>Recysion</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-outline" size={windowWidth * 0.06} color="white" onPress={() => navigation.navigate('Messenger')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={windowWidth * 0.06} color="white" onPress={() => navigation.navigate('Setting')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu-outline" size={windowWidth * 0.06} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically
    backgroundColor: '#74B49B',
    paddingHorizontal: 15,
    marginTop: 0,
    paddingTop: 40,
    height: 100,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
  },
  rightContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: -14,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15, // Adjust spacing between logo and title
  },
  iconButton: {
    paddingHorizontal: 10,
  },
});

export default HeaderHome;