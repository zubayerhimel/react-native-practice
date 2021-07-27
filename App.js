import React from "react";
import { StyleSheet, Platform, StatusBar, Dimensions, View } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/CardComponent";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import Screen from "./components/Screen";

export default function App() {
  return <ListingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
