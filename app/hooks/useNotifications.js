// import { useEffect } from "react"
// import * as Permissions from "expo-permissions";
// import * as  Notifications from 'expo-notifications';


// export default useNotifications = (notificationListener) => {
//     useEffect(() => {
//         registerForPushNotifications();
//     },[])

//     const registerForPushNotifications = async () => {
//         try {
//             const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//             if(!permission.granted) return ; // As Notifications api doesn't work on ios
//             // simulator, the permission.granted always return false

//             const token = await Notifications.getExpoPushTokenAsync();
//             console.log(`expoPushToken: ${token}`);

//         } catch (error) {
//             console.log('Error geting a push token', error)
//         }
//     }

// }