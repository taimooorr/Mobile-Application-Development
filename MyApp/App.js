
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import React from 'react';
import WelcomeScreen from './Components/WelcomeScreen';
import StudentRecord from './Components/ClickableImage';
import Contact from './Components/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
  <Contact></Contact>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
