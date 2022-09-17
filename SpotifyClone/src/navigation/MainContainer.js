import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';

import ThemeProvider from '../provider/ThemeProvider';
import {store} from '../redux/store';
import MainStackNavigator from './MainStackNavigator';
export default function MainContainer() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <MainStackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
