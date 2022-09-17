import IconSettings from '@expo/vector-icons/Feather';
import IconSearch from '@expo/vector-icons/Fontisto';
import IconHome from '@expo/vector-icons/Octicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsContainer from './SettingsContainer';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'pink',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size}) => (
            <IconHome name="home" color="black" size={size} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size}) => (
            <IconSearch name="search" color="black" size={size} />
          ),
          tabBarLabel: 'Search',
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({size}) => (
            <IconSettings name="settings" color="black" size={size} />
          ),
        }}
        name="SettingsContainer"
        component={SettingsContainer}
      />
    </Tab.Navigator>
  );
}
