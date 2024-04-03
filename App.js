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
import { useCallback, useEffect, useState } from "react";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage"
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/authContext";
import authStorage from "./app/auth/authTokenStorage";
import { jwtDecode } from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {

  // 
  const [ user, setUser ] = useState();
  const [ appIsReady, setAppIsReady ] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if(user) setUser(user);
  };

  const prepare = async () => {
    try {
      restoreUser();
      
    } catch (error) {
      console.warn(error)
      
    } finally {
      setAppIsReady(true);
    }
  }

  useEffect(()=> {
   prepare();
  }, []);

  const onLayoutRootView = useCallback(async() => {
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady){ return null; }

  return (

    <AuthContext.Provider value={{ user, setUser}}>
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigator /> */}

        {user ?   <AppNavigator />: <AuthNavigator />  }
        {/* <AppNavigator /> */}
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
    </AuthContext.Provider>

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
