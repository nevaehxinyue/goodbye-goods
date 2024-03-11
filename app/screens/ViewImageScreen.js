import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import color from '../config/color';

function ViewImageScreen(props) {
    return (
        <View style={styles.constainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
       <Image resizeMode="contain" style={styles.image} source={require('../assets/chair1.jpeg')} />
       </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.third,
        position: 'absolute',
        top: 40,
        left: 30

    },
    constainer: {
        backgroundColor: color.black,
        flex: 1

    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.second,
        position: 'absolute',
        top: 40,
        right: 30

    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ViewImageScreen;