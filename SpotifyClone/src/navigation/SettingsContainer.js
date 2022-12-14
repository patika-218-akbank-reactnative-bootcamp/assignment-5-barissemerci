import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import EditProfileScreen from '../screens/EditProfileScreen';
import LikedScreen from '../screens/LikedScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThemeOptionsScreen from '../screens/ThemeOptionsScreen';

const Stack = createNativeStackNavigator();

export default function SettingsContainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LikedScreen" component={LikedScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ThemeOptionsScreen" component={ThemeOptionsScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
