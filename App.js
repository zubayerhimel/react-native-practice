// import { StatusBar } from "expo-status-bar";
import React from "react";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import { StyleSheet, Platform, StatusBar, Dimensions, View } from "react-native";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  // console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
