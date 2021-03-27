import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
    </View>
  );
}

import HomeTabNavigator from "./HomeTabNavigator";


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={ExploreScreen}
          options={{
            title: "Search your destination"
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={HomeScreen}
          options={{
            title: "How many people?"
          }}
        />

        <Stack.Screen
          name={"Post"}
          component={HomeScreen}
          options={{
            title: "Accommodation"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;