import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/MainContainer';

export default function App() {
  const Stack = createNativeStackNavigator();

  

  return (
    <MainContainer />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
