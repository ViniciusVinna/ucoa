import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link, useSegments, useLocalSearchParams, useGlobalSearchParams, Stack } from "expo-router";

// headerRight: () => <Link href="/account/112233/">Inserir Conta</Link>,


export default function AccountPage() {

  const global = useGlobalSearchParams();
  const local = useLocalSearchParams();
  const segments = useSegments();

  console.log({ local, global, segments });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "Inserir Conta",
          headerLeft: () => <Link href="/" />,
        }}
      />

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
