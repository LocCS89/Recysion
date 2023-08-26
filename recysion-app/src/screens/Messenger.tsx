import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import SimpleHeader from './Component/SimpleHeader';

const Messenger = () => {
  const [userList, setUserList] = useState([
    { id: '1', name: 'User 1', status: 'Online', avatar: require('../../img/userAvatar.png') },
    { id: '2', name: 'User 2', status: 'Offline', avatar: require('../../img/userAvatar.png') },
    { id: '3', name: 'User 3', status: 'Online', avatar: require('../../img/userAvatar.png') },
    { id: '4', name: 'User 4', status: 'Offline', avatar: require('../../img/userAvatar.png') },
    { id: '5', name: 'User 5', status: 'Offline', avatar: require('../../img/userAvatar.png') },
    { id: '6', name: 'User 6', status: 'Offline', avatar: require('../../img/userAvatar.png') },
    { id: '7', name: 'User 7', status: 'Offline', avatar: require('../../img/userAvatar.png') },

    // Add more users with their status and avatars
  ]);

  const renderUserItem = ({ item }) => (
    <TouchableOpacity style={styles.userItem}>
      <Image source={item.avatar} style={styles.userAvatar} />
      <View>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatus}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <><SimpleHeader title='Messenger' /><View style={styles.container}>
          <Text style={styles.title}>Your Friends</Text>
          <FlatList
              data={userList}
              renderItem={renderUserItem}
              keyExtractor={item => item.id} />
      </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#74B49B',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#74B49B',
    paddingVertical: 15,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    color: '#5C8D89',
  },
  userStatus: {
    fontSize: 16,
    color: '#A7D7C5',
  },
});

export default Messenger;
