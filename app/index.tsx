import Icons from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { SafeAreaView, ScrollView} from "react-native";

import { SearchNode, StacksHeader } from "@/containers";
import { theme } from "@/theme";
import { useCases } from "@/core";

const { designTokens } = theme;

export default function Home() {
  const { state } = useCases.account.hooks.useAccount();

  return (
    <SafeAreaView style={{ backgroundColor: designTokens.colors.primary }}>
      <ScrollView>
        <StacksHeader
          config={{
            headerTitle: "Plano de Contas",
            headerShadowVisible: false,
            headerRight: () => (
              <Link
                href="/account/"
                style={{
                  paddingHorizontal: designTokens.spacings.medium,
                }}
              >
                <Icons
                  color={designTokens.colors.text.lighter}
                  name="plus"
                  padding={designTokens.spacings.medium}
                  size={designTokens.sizes.large}
                />
              </Link>
            ),
          }}
        />

        <SearchNode tree={state} />
      </ScrollView>
    </SafeAreaView>
  );
}