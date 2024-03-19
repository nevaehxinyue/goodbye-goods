import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../config/color';
import defaultStyles from "../config/styles"

function AppTextInput({icon, ...otherProps}) {
    return (
      <View style={styles.container}>
        {icon &&<MaterialCommunityIcons name={icon} size={22} color={color.mediumGrey} style={styles.icon}/>}
        <TextInput style={defaultStyles.text} {...otherProps}/>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.lightGray,
        borderRadius: 25,
        flexDirection:'row',
        width:'100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    
})

export default AppTextInput;