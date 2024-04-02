import React, { useContext } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/lists/ListItem";
import color from "../config/color";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import AuthContext from "../auth/authContext";
import authStorage from "../auth/authTokenStorage";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      textColor: color.second,
      backgroundColor: color.third,
    },
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
  const { user, setUser } = useContext(AuthContext);
  
  const handleLogout = ()=> {
    setUser(null);
    authStorage.removeToken();
  }
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/user2.jpg")}
          title={user.name}
          subTitle={user.email}
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
        onPress={handleLogout}
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
