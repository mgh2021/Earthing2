import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Help Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>


      <Tab.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />


      <Tab.Screen
        name={'About'}
        component={AboutScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="Feather" size={25} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default HomeTabNavigator;