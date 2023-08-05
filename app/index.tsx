import { SafeAreaView, ScrollView} from "react-native";

import { SearchNode, StacksHeader } from "@/containers";
import { theme } from "@/theme";

const { designTokens } = theme;

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: designTokens.colors.primary }}>
      <ScrollView>
        <StacksHeader
          config={{
            headerTitle: "Home",
            headerShadowVisible: false,
          }}
          href="/account/"
        />

        <SearchNode />
      </ScrollView>
    </SafeAreaView>
  );
}