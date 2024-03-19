import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import color from "../config/color";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            textColor: color.second,
            backgroundColor: color.third,   
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            textColor: color.white,
            backgroundColor: color.second,   
        }
    }
]

function AccountScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
      <ListItem
        image={require("../assets/user2.jpg")}
        title="Nevaeh"
        subTitle="xyue614@gmail.com"
      />
      </View>
      <View style={styles.container}>
      <FlatList
      data={menuItems}
      keyExtractor={menuItem=> menuItem.title}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item })=> 
    <ListItem 
    title={item.title}
    IconComponent={
        <Icon name={item.icon.name} iconColor={item.icon.textColor} backgroundColor={item.icon.backgroundColor} />
    }/> }
      />
      </View>
      <ListItem title='Log Out' IconComponent={
        <Icon name="logout" backgroundColor='#f5d3bf'/>
      }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        flex: 1,
        backgroundColor: color.lightGray
    }
})

export default AccountScreen;
