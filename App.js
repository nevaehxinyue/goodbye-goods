import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/Button";
import color from "./app/config/color";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/lists/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListItem from "./app/components/lists/ListItem";
import Icon from "./app/components/Icon";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { useState } from "react";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WelcomeScreen />
      {/* <MessagesScreen />  */}
      {/* <AccountScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <ViewImageScreen /> */}
    </GestureHandlerRootView>

    //
    // <GestureHandlerRootView style={{flex:1}}>
    // <MessagesScreen />
    // </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
