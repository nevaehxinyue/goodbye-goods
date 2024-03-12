import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import color from '../config/color';


function ListItemSeller({ title, subTitle, image}) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={image}/>

        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10

    },
    subTitle: {
        color: color.mediumGrey,
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItemSeller;
