import {
  View, StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button, Text
} from 'react-native';
import React, { useState } from 'react';
export default function ContactsData() {

  let ConsData = [
    {
      id: 1,
      Name: "John",
      Number: "0300-1234567"
    },
    {
      id: 2,
      Name: "Alex",
      Number: "0300-1234567"
    },
    {
      id: 3,
      Name: "Ali",
      Number: "0300-1234567"
    },
    {
      id: 4,
      Name: "Rohit",
      Number: "0300-1234567"
    },
  ]

  const [name, setName] = useState(ConsData);
  const [number, setNumber] = useState(ConsData);
  return (

    <View style={styles.container} >
      <View style={styles.two} >
        <FlatList
          data={ConsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onLongPress={
              () => {
                setName(item.Name)
                setNumber(item.Number)
              }
            } style={styles.item}>
              <Text style={styles.textStyle}>{item.Name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.two}>
        <View >
          <TextInput style={styles.input} value={name} onChangeText={(newText) => { setName(newText) }} placeholder='Name' ></TextInput>
          <TextInput style={styles.input} value={number} onChangeText={(newPhone) => { setNumber(newPhone) }} placeholder='Phone number' ></TextInput>
          <Button title="Edit" ></Button>
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  two: {
    flex: 0.7,
    width: "100%",
  },
  item: {
    width: "100%",
    top: 25,
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 3

  },
  textStyle: {
    fontSize: 20,
  },
  input: {
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    height: 45,
    fontSize: 20,
  }

})