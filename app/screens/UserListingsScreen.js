import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import color from "../config/color";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/Text";
import AppButton from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import { UserNaviParamContext } from "../hooks/useUserNaviParamContext";
import { useFocusEffect } from "@react-navigation/native";

function UserListingsScreen({ navigation }) {
  // const { browsedUser}  = route.params;
  const { userNaviParam } = useContext(UserNaviParamContext);
  const {
    data: userListings,
    error,
    loading,
    request: loadUserListings,
  } = useApi(listingsApi.getUserListings);

  useEffect(() => {
    if(userNaviParam){
        loadUserListings(userNaviParam.id);
    };
  },[ userNaviParam])

//   useFocusEffect(
//     React.useCallback(()=> {
//         if(userNaviParam){
//             loadUserListings(userNaviParam.id);
//         };
//     }, [])
//   );

  if(!userNaviParam || error){
    return null;
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <AppButton
              title="Retry"
              onPress={loadUserListings}
              buttonColor="bronze"
            />
          </>
        )}

        <FlatList
          data={userListings}
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

export default UserListingsScreen;
