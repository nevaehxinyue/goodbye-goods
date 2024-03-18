import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import color from "./app/config/color";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    // <View style={{backgroundColor: '#f8f4f4', padding: 20, paddingTop: 100}} >
    //   <Card
    //     title="Denim Jacket"
    //     subTitle="$80"
    //     image= {require("./app/assets/jacket.png")}
    //   />
    // </View>
    // <ListingDetailsScreen />

    // <WelcomeScreen />
    <MessagesScreen />

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
