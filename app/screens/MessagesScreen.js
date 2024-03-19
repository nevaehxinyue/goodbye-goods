import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";


const initalMessages = [
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
  const [ messages, setMessage ] = useState(initalMessages);
  const [ refreshing, isRefreshing ] = useState(false);

  const handleDelete = message => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessage(newMessages)
  }
  return (
   
    <SafeAreaView style={{ flex: 1}}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected.', item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator/>}
        //Implement pull to refresh function 
        refreshing={refreshing}
        onRefresh={()=> setMessage(
          [
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/user3.jpg"),
            },
          ]
        )}
        
      />
    </SafeAreaView>

  );
}

export default MessagesScreen;
