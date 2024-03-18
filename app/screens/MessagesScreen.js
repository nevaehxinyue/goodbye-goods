import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/user1.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/user3.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <SafeAreaView>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected.', item)}
            renderRightActions={() => <ListItemDeleteAction/>}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator/>}
      />
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default MessagesScreen;
