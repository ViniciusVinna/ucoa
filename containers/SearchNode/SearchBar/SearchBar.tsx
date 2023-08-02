import Icons from "@expo/vector-icons/Feather";
import React from "react";
import { TouchableHighlight, View, StyleSheet, TextInput } from "react-native";

import { theme  } from "@/theme";
const { designTokens } = theme;

export type SearchBarParams = {
  value: string;
  onClearHandler: (value: string) => void;
};

export default function SearchBar({ value = "", onClearHandler }: SearchBarParams) {
  return (
    <View style={{
      paddingHorizontal: designTokens.spacings.default,
      paddingBottom: designTokens.spacings.large,
    }}>
      <View style={styles.searchBar}>
        <Icons
          color={theme.designTokens.colors.text.light}
          marginRight={designTokens.spacings.default}
          name="search"
          size={designTokens.spacings.large}
        />

        <TextInput
          placeholder="Pesquisar conta"
          style={{
            marginRight: "auto",
            color: theme.designTokens.colors.text.light
          }}
        />

        <TouchableHighlight>
          <Icons
            name="x"
            size={designTokens.spacings.default}
            color={designTokens.colors.text.light}
            onPress={() => onClearHandler(value)}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    alignItems: "center",
    backgroundColor: designTokens.colors.white,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    height: designTokens.spacings.xxxlarge,
    justifyContent: "flex-start",
    paddingHorizontal: designTokens.spacings.default,
  }
});