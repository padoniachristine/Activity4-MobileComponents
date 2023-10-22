import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  
  const data = [
    { id: '1', text: 'Dunkirk' },
    { id: '2', text: 'Spiderman' },
    { id: '3', text: 'Avengers' },
    { id: '4', text: 'Black Widow' },
    { id: '5', text: 'Black Hawk' },
    { id: '6', text: 'The Nun' },
    
  ];

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>List Of Movies</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#7d409f',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
   
  },
  text:{
    color: 'white'
  }
});

export default App;
