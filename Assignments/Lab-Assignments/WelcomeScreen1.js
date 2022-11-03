import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput,Button,SafeAreaView} from "react-native";

function WelcomeScreen(props) {

  return (

    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View >
          <Text style={styles.TextMoto}>
            Think Big and Start Small
          </Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput style={styles.input2} placeholder="Enter Your Email" ></TextInput>
          <TextInput secureTextEntry={true} style={styles.input3} minLength={8} placeholder="Password" ></TextInput>
        </View>
        <View style={styles.BtnLogin}>
          <Button title="Login" color="black" onPress={() => alert("Currently In Development")}></Button>
        </View>
        <View style={styles.BtnReg}>
          <Button title="Register" color="black" onPress={() => alert("Currently In Development")}></Button>
        </View>
        </ImageBackground>
    </>

  )



}
const styles = StyleSheet.create({
  inputFields: {
    flex: 0.3,
    width: 300,
    borderRadius: 10,
    bottom  : 250,
  },
  BtnLogin: {
    width: '100%',
    color: 'red',
  },
  BtnReg: {
    width: '100%',
    color : '#fc5c65',
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    width: '100%',
    alignItems: 'center',
  },
  TextMoto: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "bold",
    top: -400,

  },
  input2: {
    width: "100%",
    borderWidth: 3,
    height: 40,
    alignSelf: "center",
    backgroundColor: "white",
    MarginTop: 10,



  },
  input3: {
    width: "100%",
    borderWidth: 3,
    height: 40,
    alignSelf: "center",
    backgroundColor: "white"
  },
})

export default WelcomeScreen