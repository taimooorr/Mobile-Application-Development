import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Screen from "../components/Screen";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain one uppercase, one lowercase letter and one number").label("Password"),
})
export default function LoginScreen({ navigation }) {
  const onSubmit = async (values) => {
    console.log(values)
    try {
      const user = await AsyncStorage.multiGet(["email", "password", "name"]);
      if (user[0][1] === values.email && user[1][1] === values.password) {
        navigation.navigate("AccountScreen", { name: user[2][1], email: user[0][1] });
      }
      else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Something went wrong", error);
    }
  }
  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});



