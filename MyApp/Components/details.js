import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Details = ({ navigation, route }) => {
  return (
    <View>
      <Text sytle={{ color: 'red' }}>Details Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ backgroundColor: 'blue', color: 'white', width: 130, fontWeight: 'bold' }}>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details;