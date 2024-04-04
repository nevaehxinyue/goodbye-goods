import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailsScreen from "../components/lists/ListingDetailsScreen";
import UserListingsScreen from "../screens/UserListingsScreen";
import routes from "./routes";
import UserNaviParamProvider, {
  UserNaviParamContext,
} from "../hooks/useUserNaviParamContext";

const Stack = createStackNavigator();

const UserListingsNavigator = ({ route }) => {
  const { setUserNaviParam } = useContext(UserNaviParamContext);

  if (route.params.user) {
    setUserNaviParam(route.params.user);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.USERLISTINGS}
        component={UserListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UserListingsNavigator;
