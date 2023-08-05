import Icons from "@expo/vector-icons/Feather";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Link, Stack, useGlobalSearchParams } from "expo-router";

import { theme } from "@/theme";

const { designTokens } = theme;

export default function AccountPageEdit() {
  const { id: code = "" } = useGlobalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: `Conta ${code}`,
          headerBackTitleVisible: true,
          headerLeft: () => (
            <Link href="/" style={styles.icon}>
              <Icons
                name="arrow-left"
                size={designTokens.sizes.large}
                color={designTokens.colors.text.lighter}
              />
            </Link>
          ),
        }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>
          EDIT ACCOUNT PAGE BY ID {code}
        </Text>

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

  icon: {
    padding: 10,
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
