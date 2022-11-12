import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import MyButton from "./MyButton";

const ListItem = ({ id, userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <Image
          source={require("../assets/user-icon.png")}
          style={styles.userAvatar}
        ></Image>
        <MyButton text="DETAILS" color="green"></MyButton>
        <MyButton text="DELETE" color="green"></MyButton>
      </View>
      <Text>
        {id}: Name: {userName}
      </Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userAvatar: {
    marginRight: 30,
    width: 60,
    height: 60,
  },
});
