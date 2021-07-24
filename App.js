import React from "react";
import { StyleSheet, Platform, StatusBar, Dimensions, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardComponent from "./components/CardComponent";

export default function App() {
  return <CardComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
