import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import ActivityIndicator from "../components/ActivityIndicator";

const initalMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1dsdsdsadsdsadsdsdassdsdsdsdsdsdsdsds",
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
  const [messages, setMessage] = useState([]);
  const {
    data: userMessages,
    request: loadMessages,
    loading
  } = useApi(messagesApi.getMessages);

  useEffect(() => {
      loadMessages();
      console.log(userMessages)
      setMessage(userMessages);
  
  },[]);

  // const [refreshing, isRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessage(newMessages);
  };
  return (
    <>
    <ActivityIndicator visible={loading}/>
    <Screen>
      <FlatList
        data={userMessages}
        renderItem={({ item }) => (
          <ListItem
            title={item.fromUser.name}
            subTitle={item.content}
            image={item.userImage}
            onPress={() => console.log("Message selected.", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
        //Implement pull to refresh function
        // refreshing={refreshing}
        // onRefresh={() =>
        //   setMessage([
        //     {
        //       id: 2,
        //       title: "T2",
        //       description: "D2",
        //       image: require("../assets/user3.jpg"),
        //     },
        //   ])
        // }
      />
    </Screen>
    </>
  );
}

export default MessagesScreen;
