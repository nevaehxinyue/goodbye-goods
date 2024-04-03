import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import myListingsApi from "../api/myListings"

function MyListingsScreen({navigation}) {

    const { data: myListings, error, loading, request: loadMyListings } = useApi(myListingsApi.getMyListings);

    useEffect(() => {
        (async () => {
            const response = await loadMyListings();
            console.log(response);
          })()  
    },[]);

    console.log(`mylistings: ${myListings}`)


    return (
        <>
    <ActivityIndicator visible={loading}/>
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadMyListings} buttonColor='bronze' />
        </>
      )}
      
      <FlatList
        data={myListings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
    </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: color.lightGray,
      },
});

export default MyListingsScreen;