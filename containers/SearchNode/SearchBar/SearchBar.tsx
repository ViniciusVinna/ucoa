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
      paddingHorizontal: designTokens.spacings.default,
      paddingBottom: designTokens.spacings.large,
    }}>
      <View style={{
        alignItems: "center",
        backgroundColor: designTokens.colors.white,
        borderRadius: 100,
        flexDirection: "row",
        height: designTokens.spacings.xxxlarge,
        justifyContent: "flex-start",
        padding: designTokens.spacings.default,
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
            color: theme.designTokens.colors.text.light,
            flex: 1,
            padding: designTokens.spacings.small,
            fontSize: designTokens.spacings.default,
            justifyContent: "flex-start",
            marginRight: "auto",
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