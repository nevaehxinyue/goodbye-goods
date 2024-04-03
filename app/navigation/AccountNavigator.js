import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MyListingsScreen from '../screens/MyListingsScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="MyAccount" component={AccountScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="MyListings" component={MyListingsScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;