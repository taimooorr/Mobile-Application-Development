import React from 'react';
import { Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native';
/**
 * show images in flat list react native
 * 
 */
export default function StudentRecord () {
  const students = [
    { name: 'Taimoor', id: 1 },
    { name: 'Umair', id: 2 },
    { name: 'Waqas', id: 3 },
    { name: 'Kashif', id: 4 },
  ]

  return (
    <FlatList
      data={students}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity  activeOpacity={.5} onPress={cl = () => {
            console.log(item.name+"  ID:"+item.id);
          }}>

            <Image style={styles.ImageClass} source={item.image}>
              
            </Image>
            <Text style={styles.textStyle}>{item.name}</Text>

        </TouchableOpacity> 
        )
      }}
      keyExtractor={item => item.id}
    />
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
  ImageClass:
  {
    marginTop: 25,
    // Setting up image width.
    width: 502,
    // Setting up image height.
    height: 44

  }
});