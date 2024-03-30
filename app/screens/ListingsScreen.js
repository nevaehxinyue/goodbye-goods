import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import color from '../config/color';
import Screen from '../components/Screen';

const listings = [
    {
        id:1,
        title: 'Denim jacket for sale',
        price: 80,
        image: require('../assets/jacket.png')
    },
    {
        id:2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.png')
    }
];

function ListingsScreen({ navigation }) {

    return (
      <Screen style={styles.screen}>
        <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem= {({ item }) => (
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
            />
    )} />
   </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: color.lightGray
    }
    
})

export default ListingsScreen;