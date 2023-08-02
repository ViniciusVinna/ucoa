import React from "react";

import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export function ListItem({ name, code, type }: AccountEntity ) {
  return (
    <View style={styles.item}>
      <Text style={[styles.positive]}>
        {name}
      </Text>

      <Ionicons
        onPress={() => alert(`${ code } - ${ type }`)}
        name="md-checkmark-circle"
        size={18}
        color="#C4C4D1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    marginVertical: 6,
    paddingHorizontal: 17,
    paddingVertical: 8,
  },

  itemTitle: {
    flexGrow: 1,
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    lineHeight: 22,
  },

  positive: {
    color: "#0000ff",
  },

  negative: {
    color: "#ff0000",
  },
});
