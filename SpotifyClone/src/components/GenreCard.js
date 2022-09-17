import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const GenreCard = ({id, name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(id, name);
      }}
      style={styles.container}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
  container: {
    width: '40%',
    backgroundColor: '#81b71a',
    height: 40,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
