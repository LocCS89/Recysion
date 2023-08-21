import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SimpleHeader from '../Component/SimpleHeader';

const DIY = () => {
  return (
    <><SimpleHeader title="Finding" /><View style={styles.container}>
      <Text style={styles.title}>DIY Recycling Projects</Text>
      <Image
        source={require('../../../img/illustration.png')} // Replace with your image source
        style={styles.image} />
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>Recycled Paper Wall Art</Text>
        <Text style={styles.projectDescription}>
          Turn old newspapers and magazines into beautiful wall art by creating intricate paper designs.
        </Text>
      </View>
      <Image
        source={require('../../../img/illustration.png')} // Replace with your image source
        style={styles.image} />
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>Plastic Bottle Planters</Text>
        <Text style={styles.projectDescription}>
          Transform plastic bottles into colorful planters for your indoor or outdoor garden.
        </Text>
      </View>
      {/* Add more images and project descriptions as needed */}
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  projectInfo: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#5C8D89',
    borderWidth: 1,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5C8D89',
  },
  projectDescription: {
    fontSize: 16,
    color: '#A7D7C5',
  },
});

export default DIY;
