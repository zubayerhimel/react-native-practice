import React from "react";
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";

const messages = [
  { id: 1, title: "T1", description: "D1", image: require("../assets/mosh.jpg") },
  { id: 2, title: "T2", description: "D2", image: require("../assets/mosh.jpg") },
];

function MessagesScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log("tapped", item)} />}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessagesScreen;
