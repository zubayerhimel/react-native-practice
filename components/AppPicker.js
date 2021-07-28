import React, { useState } from "react";
import { Button, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function AppPicker({ icon, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.grey} style={styles.icon} />}
          <AppText style={styles.text}> {placeholder} </AppText>
          <MaterialCommunityIcons name="chevron-down" size={25} color={colors.grey} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppPicker;
