import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyButton = ({ color, text, testProp2, passedFunc }) => {
  const handlePress = (passedFunc) => {
    passedFunc();
    console.log("pressing");
  };

  return (
    <TouchableOpacity onPress={() => handlePress(passedFunc)}>
      <View style={styles(color).btn}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = (color) => {
  return StyleSheet.create({
    btn: {
      backgroundColor: color,
      minWidth: 20,
      minHeight: 25,
      borderRadius: 10,
      marginHorizontal: 3,
      paddingHorizontal: 10,
      paddingVertical: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
