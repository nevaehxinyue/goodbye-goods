import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks"
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
 
  return (
    <WelcomeScreen />
    // <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
