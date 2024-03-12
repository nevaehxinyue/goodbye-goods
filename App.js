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
import ListItemSeller from "./app/components/ListItemSeller";

export default function App() {
  return (
    // <View style={{backgroundColor: '#f8f4f4', padding: 20, paddingTop: 100}} >
    //   <Card
    //     title="Denim Jacket"
    //     subTitle="$80"
    //     image= {require("./app/assets/jacket.png")}
    //   />
    // </View>
    <ListingDetailsScreen />
  

    // <WelcomeScreen />

    // <ViewImageScreen />
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
