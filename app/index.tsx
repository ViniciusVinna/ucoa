import Icons from "@expo/vector-icons/Feather";
import {  Stack, Link } from "expo-router";
import { SafeAreaView, ScrollView} from "react-native";

import { SearchNode } from "@/containers";
import { theme } from "@/theme";

const { designTokens } = theme;

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: designTokens.colors.primary }}>
      <ScrollView>
        <Stack.Screen
          options={{
            headerTitle: "Plano de Contas",
            headerShadowVisible: false,
            headerRight: () => (
              <Link
                href="/account/"
              >
                <Icons
                  name="plus"
                  size={26}
                  color={theme.designTokens.colors.text.lighter}
                />
              </Link>
            ),
          }}
        />

        <SearchNode />
      </ScrollView>
    </SafeAreaView>
  );
}