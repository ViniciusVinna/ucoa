import { Text } from "react-native";

import { theme } from "@/theme";

const { designTokens } = theme;

export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text
      style={{
        color: designTokens.colors.text.medium,
        fontSize: designTokens.fontSizes.small,
        fontWeight: "bold",
        paddingBottom: designTokens.spacings.small,
        paddingHorizontal: designTokens.spacings.small,

      }}
    >
      {children}
    </Text>
  );
}