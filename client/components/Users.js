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
  const [fireDelete, setFireDelete] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
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
  }, [fireDelete]);

  // fetchUsers();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#439889" />
      ) : (
        <View style={styles.loadedContainer}>
          {/* <Text>Users</Text> */}
          <View style={styles.btnBack}>
            <MyButton
              color="#00695c"
              text="BACK TO LOGIN PAGE"
              passedFunc={backToLoginPage}
            ></MyButton>
          </View>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <ListItem
                id={item.id}
                userName={item.login}
                password={item.password}
                date={item.date}
                fireDelete={fireDelete}
                setFireDelete={setFireDelete}
              ></ListItem>
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
    paddingTop: 20,
  },
});
