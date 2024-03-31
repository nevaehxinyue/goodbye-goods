import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import color from '../config/color';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import listingsApi from "../api/listings";

function ListingsScreen({ navigation }) {
    const [ listings, setListings ] = useState([]);

    const loadListings = async() => {
        console.log("start loading listings")
        const response = await listingsApi.getListings();
        console.log(`response: ${response.data}`)
        setListings(response.data);
        
    }

    
    useEffect(() => {
        loadListings();
    }, [])
   

    return (
      <Screen style={styles.screen}>
        <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem= {({ item }) => (
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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