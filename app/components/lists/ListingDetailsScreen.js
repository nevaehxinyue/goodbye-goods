import React from "react";
import { Image, View, StyleSheet } from "react-native";
import color from "../../config/color";
import AppText from "../Text";
import ListItem from "./ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Denim jacket for sale</AppText>
        <AppText style={styles.price}>$80</AppText>

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
