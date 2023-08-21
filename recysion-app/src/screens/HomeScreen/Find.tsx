import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import SimpleHeader from '../Component/SimpleHeader';
const Find = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([
    'Scrap Metal',
    'Cardboard',
    'Aluminum',
    'Paper Glass',
    'PETE',
    'HDPE',
    'PP',
    'Organic',
    'Electronics',
    'Cloth',
  ]);

  const handleSearch = (text) => {
    setSearchText(text);
    // You can implement filtering logic based on the 'text' here
  };

  return (
    <><SimpleHeader title="Find" /><View style={styles.container}>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for a material"
        value={searchText}
        onChangeText={handleSearch} />
      <FlatList
        data={suggestions}
        renderItem={({ item }) => <Text style={styles.suggestion}>{item}</Text>}
        keyExtractor={(item) => item} />
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  suggestion: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Find;
