import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import MyButton from "./MyButton";
import { useNavigation } from "@react-navigation/native";
import { settings } from "./Settings";

const ListItem = ({
  id,
  userName,
  password,
  date,
  fireDelete,
  setFireDelete,
}) => {
  const navigation = useNavigation();
  const goToUserDetail = () => {
    navigation.navigate("Details", {
      userId: id,
      userName: userName,
      userPassword: password,
      date: date,
    });
  };
  const deleteUser = async () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    try {
      const response = await fetch(
        `${settings.adres}${settings.port}/deleteUser`,
        options
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setFireDelete(!fireDelete);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <Image
          source={require("../assets/user-icon.png")}
          style={styles.userAvatar}
        ></Image>
        <MyButton
          text="DETAILS"
          color="#00695c"
          passedFunc={goToUserDetail}
        ></MyButton>
        <MyButton
          text="DELETE"
          color="#00695c"
          passedFunc={deleteUser}
        ></MyButton>
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
