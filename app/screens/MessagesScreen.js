import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";

const initialMessages = [
  { id: 1, title: "T1", description: "D1", image: require("../assets/mosh.jpg") },
  { id: 2, title: "T2", description: "D2", image: require("../assets/mosh.jpg") },
  { id: 3, title: "T3", description: "D3", image: require("../assets/mosh.jpg") },
  { id: 4, title: "T4", description: "D4", image: require("../assets/mosh.jpg") },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (item) => {
    setMessages(messages.filter((el) => el.id !== item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tapped", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
