import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "./Card";

function CardComponent() {
  return (
    <View style={styles.card}>
      <Card title="Red Jacket for sale" subTitle="$100" image={require("../app/assets/jacket.jpg")}></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default CardComponent;
