import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Redirect to Details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;