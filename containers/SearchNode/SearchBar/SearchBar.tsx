import Icons from "@expo/vector-icons/Feather";
import { TouchableHighlight, View, TextInput } from "react-native";

import { theme  } from "@/theme";
const { designTokens } = theme;

export type SearchBarParams = {
  onChangeTextHandler: (value: string) => void;
};

export default function SearchBar({ onChangeTextHandler = (value) => { value; } }: SearchBarParams) {
  return (
    <View style={{
      paddingBottom: designTokens.spacings.default,
    }}>
      <View style={{
        alignItems: "center",
        backgroundColor: designTokens.colors.white,
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: designTokens.spacings.large,
        paddingVertical: designTokens.spacings.large,
        marginBottom: designTokens.spacings.default,
      }}>
        <Icons
          color={theme.designTokens.colors.text.light}
          marginRight={designTokens.spacings.default}
          name="search"
          size={designTokens.spacings.large}
        />

        <TextInput
          placeholder="Pesquisar conta"
          onChangeText={onChangeTextHandler}
          style={{
            borderRadius: 100,
            color: theme.designTokens.colors.text.light,
            flex: 1,
            fontSize: designTokens.spacings.default,
            justifyContent: "flex-start",
            marginHorizontal: designTokens.spacings.small,
            outlineColor: theme.designTokens.colors.text.light,
            padding: designTokens.spacings.medium,
          }}
        />

        <TouchableHighlight>
          <Icons
            name="x"
            size={designTokens.spacings.default}
            color={designTokens.colors.text.light}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}