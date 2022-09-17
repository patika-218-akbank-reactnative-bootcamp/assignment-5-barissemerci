import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setUser} from '../redux/user';
import ArtistSongScreen from '../screens/ArtistSongScreen';
import GenreSongScreen from '../screens/GenreSongScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('user').then(val => {
      console.log("MainStackNavigation AsyncStorage'dan çekildi:", val);
      dispatch(setUser(val));
      console.log("MainStackNavigation Redux'a atandı user:", val);
    });
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <>
        {!user ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
            <Stack.Screen name="GenreSongScreen" component={GenreSongScreen} />

            <Stack.Screen
              name="ArtistSongScreen"
              component={ArtistSongScreen}
            />
          </>
        )}
      </>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
