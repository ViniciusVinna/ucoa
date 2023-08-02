import React from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet} from "react-native";

import { ListItem } from "./Item";

import { useCases } from "@/core";

const accountsData = useCases.account.store.data;

console.log({ accountsData });

export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Listagem</Text>

        <Text style={styles.info}>10 registros</Text>
      </View>

      <FlatList
        style={styles.list}
        data={accountsData}
        renderItem={({ item }) => (
          <ListItem {...item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 16,
  },

  info: {
    fontSize: 16,
  },

  list: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    flexGrow: 1,
    color: "#000",
  },
});
