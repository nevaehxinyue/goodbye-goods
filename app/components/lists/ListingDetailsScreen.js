import React from "react";
import { View, StyleSheet } from "react-native";
import color from "../../config/color";
import AppText from "../Text";
import ListItem from "./ListItem";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const item = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: item.images[0].thumbnailUrl }}
        uri={item.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{item.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            title="Nevaeh"
            subTitle="5 Listings"
            image={require("../../assets/user2.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: color.bronze,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
