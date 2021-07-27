import React from "react";
import { StyleSheet, Platform, StatusBar, Dimensions, View } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/CardComponent";
import Icon from "./components/Icon";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
