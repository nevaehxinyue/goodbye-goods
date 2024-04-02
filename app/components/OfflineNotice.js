import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './Text';
import color from '../config/color';
import Constants from 'expo-constants'
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if(netInfo.isInternetReachable === false && netInfo.type !== 'unknown') {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
        
    } 
    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.darkGray,
        height: 50,
        width: '100%',
        position: 'absolute',
        top: Constants.statusBarHeight,
        zIndex: 1,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    text: {
        color: 'white'
    }
});

export default OfflineNotice;