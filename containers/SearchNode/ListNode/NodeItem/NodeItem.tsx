import React from "react";
import Icons from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";

import { theme  } from "@/theme";
import { useCases } from "@/core";

const { helpers, designTokens } = theme;

type NodeItemProps = AccountEntity;

export default function NodeItem({ name, code = "", type, allowsEntries }: NodeItemProps) {
  const nestingLevel = code.split(".").length;

  const backgroundColor = type === useCases.accounts.constants.Dictionary.REVENUE
    ? helpers.darkenColor(designTokens.colors.successLight, (nestingLevel * 6))
    : helpers.darkenColor(designTokens.colors.warningLight, (nestingLevel * 6));

  const color = type === useCases.accounts.constants.Dictionary.REVENUE
    ? designTokens.colors.success
    : designTokens.colors.error;

  return (
    <View
      style={{
        ...styles.item,
        backgroundColor: allowsEntries ? designTokens.colors.white : backgroundColor,
        borderColor: allowsEntries ?  backgroundColor : helpers.darkenColor(color, 6),
        borderWidth: 1,
        marginLeft: (nestingLevel > 1 ? nestingLevel  * 6 : 0),
      }}>

      <Text style={{ color: color }}>
        { code } - {name}
      </Text>

      { !! allowsEntries && (
        <Icons
          onPress={() => alert(`${ code } - ${ type }`)}
          name="trash"
          size={20}
          style={{
            backgroundColor: designTokens.colors.white,
            color: designTokens.colors.text.light,
            borderColor: designTokens.colors.background,
            borderRadius: 100,
            padding: 4,
          }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    borderRadius: theme.designTokens.spacings.medium,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginTop: 4,
    padding: theme.designTokens.spacings.medium,
  }
});
