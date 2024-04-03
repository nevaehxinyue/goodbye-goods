import * as SecureStorage from "expo-secure-store";
import { jwtDecode } from 'jwt-decode';

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

const getUser = async() => {
    try {
        const token = await getToken();
        return token? jwtDecode(token) : null;
    } catch (error) {
        console.log(error)
    }
}

const removeToken = async() => {
    try {
        await SecureStorage.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token.")
        
    }
   
};

export default { getToken, getUser, storeToken, removeToken};