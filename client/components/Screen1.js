import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyButton from "./MyButton";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button
        title="go to screen2"
        onPress={() => navigation.navigate("Users")}
      />
      <MyButton
        color="green"
        text="tesxtssd"
        testPress={() => navigation.navigate("Users")}
      ></MyButton>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
