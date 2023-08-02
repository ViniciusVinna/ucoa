import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import { ListItem } from "./Item";

import { designTokens } from "@/theme/design-tokens";

type ListNodeParams = { data: AccountEntity[] };

function ListNodesCounter({ counter }: { counter: number }) {
  return (
    <View style={styles.counter}>
      <Text style={styles.heading}>Listagem</Text>
      <Text style={styles.info}>
        {counter} registros
      </Text>
    </View>
  );
}

export default function ListNode({ data }: ListNodeParams) {
  return (
    <>
      <ListNodesCounter counter={data.length} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem {...item} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  counter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16
  },

  info: {
    color: designTokens.colors.text.medium,
    fontSize: 14,
  },

  heading: {
    color: designTokens.colors.text.dark,
    fontWeight: "bold",
    fontSize: 18,
  },
});
