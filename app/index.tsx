import {  Stack, Link } from "expo-router";
import { SafeAreaView } from "react-native";

import { List } from "@/components";

export default function Home() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Plano de Contas",
          headerRight: () => <Link href="/account/">Cadastrar Conta</Link>,
        }}
      />

      <List />
    </SafeAreaView>
  );
}