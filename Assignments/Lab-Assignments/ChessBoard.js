import React from 'react';
import { StyleSheet, View } from 'react-native';



export default function ChessBoard() {

  return (
    <View style={styles.Box} >
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
      <View style={styles.whiteBox} />
      <View style={styles.blackBox} />
    </View>


  );
}

const styles = StyleSheet.create({

  Box: {
    height: 480,
    width: 480,
    backgroundColor: "grey",
    borderStyle: 'solid',
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",

  },
  blackBox: {
    backgroundColor: "black",
    width: 60,
    height: 60,
  },
  whiteBox: {
    backgroundColor: "white",
    width: 60,
    height: 60,

  }
});