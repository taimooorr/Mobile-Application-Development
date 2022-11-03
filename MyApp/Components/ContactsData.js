import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { useState } from 'react';
import React from 'react';
/**
 * Design screen and use state to save contacts data
 */
export default function ContactsData() {
  const ContactsData = [
    {
      name: "Ali Khan",
      phone: "0300-1234567",
    },
    {
      name: "Malik Waqas",
      phone: "0300-1234567",
    },
    {
      name: " Taimoor",
      phone: "0300-1234567",
    },
    {
      name: "Umair",
      phone: "0300-1234567",
    },
  ];


    /**
     * use state and show edit and delete button on long press
     */

  }
  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.Name}>{name}</Text>
    </View>
  );
  const Flat = () => {
    const renderItem = ({ item }) => (
      <Item name={item.name} />
    );

    return (
      <>
        <SafeAreaView >
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.name}

          />
          <TextInput style={styles.txt} placeholder='Name' ></TextInput>
          <TextInput style={styles.txt} placeholder='Phonenumber' ></TextInput>
          <TouchableOpacity
            style={{
              width: 100,
              height: 25,
              borderRadius: 2,
              borderWidth: 2,
              textAlign: "center",

            }}
          >Edit</TouchableOpacity>
        </SafeAreaView>

      </>


    );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  ImageClass:
  {
    alignContent: 'center',
    // Setting up image width.
    width: "100%",
    // Setting up image height.#
    top: 25,
    left: 5,
    height: 45,
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
  }
})