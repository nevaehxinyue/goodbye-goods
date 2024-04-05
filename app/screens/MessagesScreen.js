import React, {useState} from "react";
import { FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import ActivityIndicator from "../components/ActivityIndicator";
import { useFocusEffect } from "@react-navigation/native";
import { ErrorMessage } from "../components/forms";

function MessagesScreen(props) {
  const [ deleteError, setDeleteError] = useState();

  const {
    data: userMessages,
    request: loadMessages,
    loading,
  } = useApi(messagesApi.getMessages);

  const {
    request: deleteMessage,
    error,
  } = useApi(messagesApi.deleteMessage);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        await loadMessages();
        // setMessage(userMessages);
      };
      fetchData();
    }, [])
  );
  const handleDelete = (messageId) => {
   
    const response = deleteMessage(String(messageId));
    if (error) {
      setDeleteError("Failed to delete the message.")
    }
    loadMessages();

  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <ErrorMessage error={deleteError} visible={error}/>
        <FlatList
          data={userMessages}
          renderItem={({ item }) => (
            <ListItem
              title={item.fromUser.name}
              subTitle={item.content}
              image={item.userImage}
              onPress={() => console.log("Message selected.", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
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
