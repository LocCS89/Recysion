import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import SimpleHeader from '../Component/SimpleHeader';

const Items = () => {
  const [searchText, setSearchText] = useState('');
  
  // Sample data for items
  const items = [
    { name: 'Cardboard', status: 'Available', location: 'Hanoi', image: require('../../../img/illustration.png') },
    { name: 'Old Clothes', status: 'Unavailable', location: 'Hung Yen', image: require('../../../img/illustration.png') },
    { name: 'Printed Paper', status: 'Available', location: 'Vung Tau', image: require('../../../img/illustration.png') },
    { name: 'Magazines', status: 'Available', location: 'Ha Nam', image: require('../../../img/illustration.png') },
    { name: 'Recycled Paper', status: 'Available', location: 'Beijing', image: require('../../../img/illustration.png') },
    { name: 'Plastic Bottle', status: 'Unavailable', location: 'Da Nang', image: require('../../../img/illustration.png') },
    { name: 'Aluminum Cans', status: 'Available', location: 'Can Tho', image: require('../../../img/illustration.png') },
    { name: 'Glass Bottles', status: 'Available', location: 'Ha Long', image: require('../../../img/illustration.png') },
    // Add more items with status and location
  ];

  return (
    <><SimpleHeader title='Items' /><View style={styles.container}>
      <Text style={styles.title}>Recycling Items</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for an item"
        value={searchText}
        onChangeText={setSearchText} />
      <ScrollView contentContainerStyle={styles.itemList}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemStatus}>{item.status}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F9F4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#74B49B',
  },
  searchInput: {
    height: 40,
    borderColor: '#5C8D89',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#5C8D89',
  },
  itemList: {
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#5C8D89',
    borderWidth: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    margin: 10,
  },
  itemInfo: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5C8D89',
  },
  itemStatus: {
    fontSize: 16,
    color: '#A7D7C5',
  },
  itemLocation: {
    fontSize: 14,
    color: '#74B49B',
  },
});

export default Items;
