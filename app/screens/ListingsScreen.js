import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import { useFocusEffect } from "@react-navigation/native"


function ListingsScreen({ navigation }) {

    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

    useFocusEffect(
      React.useCallback(()=> {
        loadListings();
      }, [])
    );
  // useEffect(() => {
  //   loadListings();
  // }, []);

  return (
    <>
    <ActivityIndicator visible={loading}/>
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} buttonColor='bronze' />
        </>
      )}
      
      <FlatList
        data={listings}
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

export default ListingsScreen;
