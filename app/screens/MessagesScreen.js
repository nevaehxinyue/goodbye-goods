import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import ActivityIndicator from "../components/ActivityIndicator";
import { useFocusEffect } from "@react-navigation/native";

function MessagesScreen(props) {
  // const [messages, setMessage] = useState([]);

  const {
    data: userMessages,
    request: loadMessages,
    loading,
  } = useApi(messagesApi.getMessages);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        await loadMessages();
        // setMessage(userMessages);
      };
      fetchData();
    }, [])
  );
  // const handleDelete = (message) => {
  //   const newMessages = messages.filter((m) => m.content !== message.content);
  //   setMessage(newMessages);
  // };

  return (
    <>
      <ActivityIndicator visible={loading} />
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
        />
      </Screen>
    </>
  );
}

export default MessagesScreen;
