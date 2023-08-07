import React from "react";
import { FlatList, View, Text, ScrollView, StyleSheet } from "react-native";

import { NodeItem } from "./NodeItem";

import { theme } from "@/theme";
const { designTokens } = theme;

type ListNodeParams = {
  data: AccountEntity[];
};

export default function ListNode({ data }: ListNodeParams) {
  return (
    <ScrollView>
      <View style={styles.counter}>
        <Text style={styles.heading}>Listagem</Text>
        <Text style={styles.info}>{data.length} registros</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NodeItem {...item} />
        )}
      />
    </ScrollView>
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
    color: designTokens.colors.text.medium,
    fontSize: designTokens.fontSizes.small,
  },

  heading: {
    color: designTokens.colors.text.dark,
    fontWeight: "bold",
    fontSize: designTokens.fontSizes.medium,
  },
});
