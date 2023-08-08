import Icons from "@expo/vector-icons/Feather";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import { FormNode, StacksHeader } from "@/containers";

import { theme } from "@/theme";

const { designTokens } = theme;

export default function AccountPage() {
  return (
    <SafeAreaView>
      <StacksHeader
        config={{
          headerTitle: "Inserir Conta",
          headerShadowVisible: false,

          headerLeft: () => (
            <Link
              href="/"
              style={{
                paddingHorizontal: designTokens.spacings.medium,
              }}
            >
              <Icons
                color={designTokens.colors.text.lighter}
                name="arrow-left"
                padding={designTokens.spacings.medium}
                size={designTokens.sizes.large}
              />
            </Link>
          ),

          headerRight: () => (
            <Link
              href="/"
              style={{
                paddingHorizontal: designTokens.spacings.medium,
              }}
            >
              <Icons
                color={designTokens.colors.text.lighter}
                name="check"
                padding={designTokens.spacings.medium}
                size={designTokens.sizes.large}
              />
            </Link>
          ),
        }}
      />

      <View style={styles.container}>
        <FormNode />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: designTokens.colors.primary,
    padding: designTokens.spacings.medium,
  }
});
