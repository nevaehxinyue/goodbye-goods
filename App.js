import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  Button,
  Image,
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
import { useEffect, useState } from "react";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function App() {
  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="Click"
        onPress={() => navigation.navigate("TweetsDetails")}
      />
    );
  };

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text>Tweets</Text>
      {/* <Link /> */}
      <Button
        title="View Tweet"
        onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
      />
    </Screen>
  );

  const TweetsDetails = ({ route }) => (
    <Screen>
      <Text>Tweets Details {route.params.id}</Text>
    </Screen>
  );

  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "blue"}, 
      headerTintColor: "white" ,
    }}>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetsDetails}
        options={({ route }) => ({
          title: route.params.id,
          headerStyle: { backgroundColor: "tomato"}, 
          headerTintColor: "white" ,
        })}
      />
    </Stack.Navigator>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      {/* <ListingEditScreen /> */}

      {/* <WelcomeScreen /> */}
      {/* <MessagesScreen />  */}
      {/* <AccountScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}

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
