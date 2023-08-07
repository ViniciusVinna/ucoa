import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import { NodeItem } from "./NodeItem";

import { theme } from "@/theme";
const { designTokens } = theme;

type ListNodeParams = {
  data: AccountEntity[];
};

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
          <NodeItem {...item} />
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
    margin: designTokens.spacings.default,
  },

  info: {
    color: designTokens.colors.text.dark,
    fontSize: designTokens.fontSizes.small,
  },

  heading: {
    color: designTokens.colors.text.dark,
    fontWeight: "300",
    fontSize: designTokens.fontSizes.medium,
  },
});
