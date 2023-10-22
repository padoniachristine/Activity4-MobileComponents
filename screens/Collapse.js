import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data = [
  {
    title: 'Image 1',
    image: require('../src/img1.jpg'),
  },
  {
    title: 'Image 2',
    image: require('../src/img2.jpg'),
  },
  {
    title: 'Image 3',
    image: require('../src/img3.jpg'),
  },
];

export default function Collapse() {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setCollapsed(!isCollapsed);
  };

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapsible}>
        <Text>Show/Hide Content</Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
        />
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
});
