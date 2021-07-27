import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Screen from "../../components/Screen";

import colors from "../../config/colors";

function AccountScreen(props) {
  const menuItems = [
    {
      title: "My Listing",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title="Mosh Hamedani" subTitle="moshhamedani@gmail.com" image={require("../assets/mosh.jpg")} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />}
        />
      </View>
      <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.lightGrey,
  },
});

export default AccountScreen;
