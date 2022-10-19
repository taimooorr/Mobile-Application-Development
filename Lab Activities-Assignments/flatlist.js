import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
export default function StudentRecord() {
  const flatlistData = [{
    id: '1',
    name: 'John',
    age: 20,
    image: require('../assets/icon.png')
  },
  {
    id: '2',
    name: 'John',
    age: 20,
    image: require('../assets/icon.png')
  }]
  return (
    <FlatList
      data={flatlistData}
      renderItem={(element, index) => {
        return (
          <Image source={element.data.image} key={index.data.id}>
            <Text>{element.data.name}</Text>
            <Text>{element.data.age}</Text>
          </Image>
        )
      }


      }
    />


  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
});
