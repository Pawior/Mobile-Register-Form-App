import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { settings } from "./Settings";
import ListItem from "./ListItem";
import MyButton from "./MyButton";

const Users = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  const fetchUsers = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {},
    };

    fetch(`${settings.adres}${settings.port}/getUserList`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserList(json);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const backToLoginPage = () => {
    navigation.navigate("Main");
  };

  useEffect(() => {
    fetchUsers();
    console.log(userList);
  }, []);

  // fetchUsers();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.loadedContainer}>
          <Text>Users</Text>
          <View style={styles.btnBack}>
            <MyButton
              color="green"
              text="BACK TO LOGIN PAGE"
              passedFunc={backToLoginPage}
            ></MyButton>
          </View>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <ListItem id={item.id} userName={item.login}></ListItem>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnBack: {
    width: `50%`,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
