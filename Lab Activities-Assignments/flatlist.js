import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
/**
 * show data of 10b students in flat list react native
 */
export default function StudentRecord() {
  const records = [
    { name: 'Ali', age: 20, id: '1' },
    { name: 'Ahmed', age: 21, id: '2' },
    { name: 'Hassan', age: 22, id: '3' },
    { name: 'Kamran', age: 23, id: '4' },
    { name: 'Kashif', age: 24, id: '5' },
    { name: 'Kamran', age: 25, id: '6' },
    { name: 'Kashif', age: 26, id: '7' },
    { name: 'Kamran', age: 27, id: '8' },
    { name: 'Kashif', age: 28, id: '9' },
    { name: 'Kamran', age: 29, id: '10' },

  ]
  return (
    <FlatList
      data={records}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        )
      }}
    />
  )
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
});