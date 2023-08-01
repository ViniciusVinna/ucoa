import {  Stack, Link } from "expo-router";
import { SafeAreaView, View, Text } from "react-native";

export default function Home() {

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Plano de Contas",
          headerRight: () => <Link href="/account/">Cadastrar Conta</Link>,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}>

        <View style={{backgroundColor: "blue", flex: 0.3}} />
        <View style={{backgroundColor: "red", flex: 0.5}} />

        <Text>Hello World!</Text>

        <Link href={{ pathname: "/account/123/", params: { name: "Bacon" } }}>With Params</Link>
      </View>
    </SafeAreaView>
  );
}