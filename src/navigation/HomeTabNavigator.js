import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import HomeScreen from '../screens/Home/index';
import SavedScreen from '../screens/Saved/index';
import AboutScreen from '../screens/About/index';
import HelpScreen from '../screens/Help/index';


import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Saved'}
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="favorite" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Help'}
        component={HelpScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="help" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'About'}
        component={AboutScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="info-with-circle" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
