import { Button, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Stack } from "expo-router";

export default function AccountPageEdit() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "Inserir Conta",
          headerRight: () => <Button onPress={() => {console.log("ok");}} title="Ok"/>,
        }}
      />;

      <View style={styles.container}>
        <Text style={styles.title}>EDIT ACCOUNT PAGE BY ID</Text>

        <View style={styles.separator} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
