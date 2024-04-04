import React, { useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import color from "../../config/color";
import AppText from "../Text";
import ListItem from "./ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../ContactSellerForm";
import useApi from "../../hooks/useApi";
import userApi from "../../api/user";
import routes from "../../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  const { data: user, request: loadUser } = useApi(userApi.getUser);

  useEffect(() => {
    loadUser(parseInt(listing.userId));
  },[])

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === 'ios' ? 0: 100}>
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            title={user.name}
            subTitle={`${user.listings} listings`}
            image={user.profileImage}
            onPress={()=> navigation.navigate(routes.USERLISTINGS_NAVIGATOR, {user})}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </View>
    </KeyboardAvoidingView>
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
