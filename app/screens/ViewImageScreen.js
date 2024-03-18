import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import color from '../config/color';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.constainer}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close'size={35}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color={color.second} size={36}/>
            </View>
       <Image resizeMode="contain" style={styles.image} source={require('../assets/chair1.jpeg')} />
       </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: color.second,
        padding:4,
        borderRadius: 30,
        position: 'absolute',
        top: 40,
        left: 30

    },
    constainer: {
        backgroundColor: color.black,
        flex: 1

    },
    deleteIcon: {
        borderRadius: 30,
        padding:5,
        backgroundColor: color.third,
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