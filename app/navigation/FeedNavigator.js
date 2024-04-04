import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../components/lists/ListingDetailsScreen";
import UserListingsNavigator from "./UserListingsNavigator";
import routes from "./routes";
import UserNaviParamProvider from "../hooks/useUserNaviParamContext"

const Stack = createStackNavigator();

const FeedNavigator = () => (
<UserNaviParamProvider>
  <Stack.Navigator
    // screenOptions={{
    //   presentation: "modal",
    //   headerShown: false,
    // }}
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ presentation: "modal", headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ presentation: "modal", headerShown: false }}
    />
    <Stack.Screen
    name={routes.USERLISTINGS_NAVIGATOR}
    component={UserListingsNavigator}/>
    
  </Stack.Navigator>
  </UserNaviParamProvider>
);

export default FeedNavigator;
