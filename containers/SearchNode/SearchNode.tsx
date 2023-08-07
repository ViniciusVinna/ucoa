import React, { useState, useCallback } from "react";
import { View, Text } from "react-native";

import { useCases } from "@/core";

import { ListNode } from "./ListNode";
import { SearchBar } from "./SearchBar";

import {  theme } from "@/theme";

const { designTokens } = theme;

type SearchNodeProps = {
  tree: AccountEntity[];
};

export default function SearchNode({ tree = [] }: SearchNodeProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const { state } = useCases.account.hooks.useAccount();

  const filterBySearchValue = useCallback(() => {
    return tree.filter(
      (branch) =>
        (branch.code
          .toLowerCase()
          .startsWith(searchValue.toLowerCase()))
        ||
        (branch.name
          .toLowerCase()
          .includes(
            searchValue.toLowerCase()))
    );
  }, [searchValue]);

  return (
    <View
      style={{
        paddingVertical: designTokens.spacings.default,
        marginHorizontal: designTokens.spacings.default,
      }}
    >
      <SearchBar onChangeTextHandler={setSearchValue}/>

      <View
        style={{
          backgroundColor: designTokens.colors.background,
          borderRadius: designTokens.spacings.large,
          paddingHorizontal: designTokens.spacings.default,
        }}>

        <ListNode
          data={ searchValue ? filterBySearchValue() : state }
        />
      </View>

      {
        searchValue && (
          <Text
            style={{
              alignItems: "center",
              borderRadius: designTokens.spacings.large,
              color: designTokens.colors.warningLight,
              justifyContent: "center",
              padding: designTokens.spacings.default,
              textAlign: "center",
            }}>
            Nenhum Item Encontrado
          </Text>
        )
      }
    </View>
  );
}