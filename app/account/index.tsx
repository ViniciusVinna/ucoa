import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Stack, Link } from "expo-router";

export default function AccountPage() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "Inserir Conta",
          headerRight: () => <Link href="/">Cadastrar Conta</Link>,
        }}
      />;

      <View style={styles.container}>
        <Text style={styles.title}>NEW ACCOUNT PAGE</Text>

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
