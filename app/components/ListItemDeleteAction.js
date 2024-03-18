import React from 'react';
import { View, StyleSheet } from 'react-native';
import color from '../config/color';
import { MaterialCommunityIcons } from '@expo/vector-icons' 

function ListItemDeleteAction(props) {
    return (
       <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={color.white} />
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.danger,
        width:70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;