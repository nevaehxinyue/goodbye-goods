import * as SecureStorage from "expo-secure-store";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const key = 'authToken'
const storeToken = async(authToken) => {
    try {
        await SecureStorage.setItemAsync(key, authToken);
 
    } catch (error) {
        console.log("Error storing auth token.")
    }
};

const getToken = async() => {
    try {
        return await SecureStorage.getItemAsync(key);
        
    } catch (error) {
        console.log("Error getting the auth token.")
        
    }
};

const removeToken = async() => {
    try {
        await SecureStorage.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token.")
        
    }
   
};

export default { storeToken, getToken, removeToken};