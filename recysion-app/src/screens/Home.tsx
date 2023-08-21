import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/types"; // Import the type
import HeaderHome  from './Component/HeaderHome';
import Icon from 'react-native-vector-icons/Ionicons';


type MainScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const Home: React.FC<MainScreenProps> = ({ navigation }) => {

  const diyImages = [
    require('../../img/illustration.png'),
    require('../../img/illustration.png'),
    require('../../img/illustration.png'),
  ];

  const suggestedImages = [
    require('../../img/illustration.png'),
    require('../../img/illustration.png'),
    require('../../img/illustration.png'),
  ];

  return (
    <><HeaderHome />
    <View style={styles.container}>
      <View style={{
        width: '100%',
        marginTop: 10,
        marginBottom: 40,
      }}>
        <Image
          source={require('../../img/header.png')}
          style={{
            width: '100%',
            height: 100
          }} />
      </View>
      <View style={styles.iconBoxContainer}>
        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#A7D7C5' }]} onPress={() => navigation.navigate('Find')}>
          <Icon name="search-outline" size={24} color="white" />
          <Text style={styles.iconText}>Find</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#74B49B' }]} onPress={() => navigation.navigate('DIY')}>
          <Icon name="hammer-outline" size={24} color="white" />
          <Text style={styles.iconText}>DIY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#5C8D89' }]} onPress={() => navigation.navigate('Items')}>
          <Icon name="cube-outline" size={24} color="white" />
          <Text style={styles.iconText}>Items</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#22A699' }]} onPress={() => navigation.navigate('Blogs')}>
          <Icon name="newspaper-outline" size={24} color="white" />
          <Text style={styles.iconText}>Blogs</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.imageList}>
        <Text style={styles.sectionTitle}>Suggested Images</Text>
        <FlatList
          horizontal
          data={suggestedImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )} />
      </View>

      <View style={styles.imageList}>
        <Text style={styles.sectionTitle}>DIY Images</Text>
        <FlatList
          horizontal
          data={diyImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )} />
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F4',
    padding: 20,
  },
  iconBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconBox: {
    width: '23%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageList: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Home;