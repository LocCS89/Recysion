import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#74B49B',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop :0,
    height: 100,
    paddingTop: 60
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SimpleHeader;
