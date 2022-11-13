import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./components/Screen1";
import Users from "./components/Users";
import ListItem from "./components/ListItem";
import Main from "./components/Main";
import Details from "./components/Details";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="s1"
          component={Screen1}
          options={{
            title: "register",
            headerStyle: {
              backgroundColor: "#ff0000",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerShown: true,
          }}
        />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="ListItem" component={ListItem} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
