import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import color from '../config/color';

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

function ListingsScreen(props) {

    return (
      <SafeAreaView style={styles.screen}>
      <View style={{ padding: 20}}>
        <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem= {({ item }) => (
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}/>
    )} />
    </View>
   


      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: color.lightGray
    }
    
})

export default ListingsScreen;