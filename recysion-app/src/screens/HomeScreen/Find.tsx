import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import SimpleHeader from '../Component/SimpleHeader';


const materials = [
  { name: 'Scrap Metal', icon: 'recycle' },
  { name: 'Cardboard', icon: 'archive' },
  { name: 'Aluminum', icon: 'cube' },
  { name: 'Paper Glass', icon: 'glass-whiskey' },
  { name: 'PETE', icon: 'flask' },
  { name: 'HDPE', icon: 'tint' },
  { name: 'PP', icon: 'shopping-bag' },
  { name: 'Organic', icon: 'leaf' },
  { name: 'Electronics', icon: 'desktop' },
  { name: 'Cloth', icon: 'tshirt' },
];

const colors = {
  mainBackground: '#F4F9F4',
  headerBackground: '#A7D7C5',
  cardBackground: '#74B49B',
  buttonBackground: '#5C8D89',
};

const MaterialSortingScreen = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
  };

  return (
    <><SimpleHeader title='Find' /><View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Material Sorting</Text>
      </View>
      <View style={styles.materialList}>
        {materials.map((material) => (
          <TouchableOpacity
            key={material.name}
            style={[
              styles.materialCard,
              selectedMaterial === material.name && { backgroundColor: colors.cardBackground },
            ]}
            onPress={() => handleMaterialSelect(material.name)}
          >
            <FontAwesome5 name={material.icon} size={24} color="white" />
            <Text style={styles.materialText}>{material.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.sortButton}>
        <Text style={styles.sortButtonText}>Sort</Text>
      </TouchableOpacity>
    </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    padding: 20,
  },
  header: {
    backgroundColor: colors.headerBackground,
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5C8D89'
  },
  materialList: {
    marginTop: 20,
  },
  materialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.buttonBackground,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  materialText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  sortButton: {
    backgroundColor: colors.buttonBackground,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  sortButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MaterialSortingScreen;
