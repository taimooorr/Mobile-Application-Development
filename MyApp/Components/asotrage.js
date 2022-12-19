import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}
const storeDataobj = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}
const getDataObj = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}
export default function asotrage(props) {
  return (
    <View>
      <Button title='hellosave' onPress={() => { storeData('taimoor')}}/>
    </View>
  )
}