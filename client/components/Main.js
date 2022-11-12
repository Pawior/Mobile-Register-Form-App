import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import MyButton from "./MyButton";
import { settings } from "./Settings";

const Main = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    };
    // Musze zewnetrzne ip dac, bo telefon jest w innej sieci
    const sendUserToServer = () => {
      return fetch(`${settings.adres}${settings.port}/sendUser`, options)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    };
    let receivedData = sendUserToServer();
    console.log(`${settings.adres}${settings.port}/sendUser`);
    // console.log(settings.adres);
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.bigText}> Register App</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.smallText}>Welcome in app!</Text>
        <KeyboardAvoidingView></KeyboardAvoidingView>
        <View style={styles.inputsAndButton}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={(newText) => setLogin(newText)}
            defaultValue={"test"}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={"test"}
          ></TextInput>
          <MyButton
            color="green"
            text="Register"
            t="tesxtssd"
            passedFunc={registerUser}
          ></MyButton>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  nameContainer: {
    flex: 1,
    backgroundColor: "#1fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    flex: 1,
  },
  bigText: {
    fontSize: 40,
    color: "white",
  },
  smallText: {
    textAlign: "center",
  },
  inputsAndButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  input: {
    height: 40,
    margin: 10,
    width: 200,
    // borderWidth: 1,
    borderBottomColor: "#090", // Add this to specify bottom border color
    borderBottomWidth: 2, // Add this to specify bottom border thickness
  },
});
