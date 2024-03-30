import React from "react";
import { Image, View, StyleSheet } from "react-native";
import color from "../../config/color";
import AppText from "../Text";
import ListItem from "./ListItem";

function ListingDetailsScreen({ route }) {
  const item = route.params;
  return (
    <View>
      <Image style={styles.image} source={item.image} />
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
