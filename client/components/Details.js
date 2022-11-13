import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Details = ({ route, navigation }) => {
  const { userId, userName, userPassword, date } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/user-icon.png")}
        style={styles.userAvatar}
      ></Image>
      <Text style={styles.smallText}> Login:</Text>
      <Text style={styles.bigText}> {userName}</Text>
      <Text style={styles.smallText}> Password:</Text>
      <Text style={styles.bigText}> {userPassword}</Text>
      <Text style={styles.smallText}> Registered: </Text>
      <Text style={styles.bigText}> {date}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "60%",
  },
  smallText: {
    fontSize: 16,
    marginVertical: 10,
  },
  bigText: {
    fontSize: 24,
    color: "#00695c",
  },
  userAvatar: {
    // marginRight: 30,
    width: 200,
    height: 200,
  },
});
