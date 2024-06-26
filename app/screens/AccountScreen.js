import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import color from "../config/color";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import userApi from "../api/user";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      textColor: color.second,
      backgroundColor: color.third,
    },
    targetScreen: 'MyListings'
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      textColor: color.white,
      backgroundColor: color.second,
    },
    targetScreen: 'Messages'
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();


  const { data: authorizedUser, request: loadUser } = useApi(userApi.getUser);

  useEffect(() => {
    loadUser(user.userId);
  },[])


  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={authorizedUser.profileImage}
          title={authorizedUser.name}
          subTitle={authorizedUser.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  iconColor={item.icon.textColor}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={logOut}
        IconComponent={<Icon name="logout" backgroundColor="#d1764f"/>
      }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
    backgroundColor: color.lightGray,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
