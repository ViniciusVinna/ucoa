import React, { useState, useCallback } from "react";
import { View, Text } from "react-native";

import { ListNode } from "./ListNode";
import { SearchBar } from "./SearchBar";

import {  theme } from "@/theme";

const { designTokens } = theme;

type SearchNodeProps = {
  tree: AccountEntity[];
};

export default function SearchNode({ tree }: SearchNodeProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const filterBySearchValue = useCallback(() => {
    const filtered = tree.filter(
      ({ code, name }) =>
        (code
          .toLowerCase()
          .startsWith(searchValue.toLowerCase()))
        ||
        (name
          .toLowerCase()
          .includes(
            searchValue.toLowerCase()))
    );

    return filtered;
  }, [searchValue]);

  return (
    <View
      style={{
        paddingVertical: designTokens.spacings.default
      }}
    >
      <SearchBar onChangeTextHandler={setSearchValue}/>

      <View
        style={{
          backgroundColor: designTokens.colors.background,
          borderRadius: designTokens.spacings.large,
          paddingHorizontal: designTokens.spacings.default,
        }}>

        <ListNode data={filterBySearchValue()} />
      </View>

      {
        searchValue &&
        <View>
          <Text
            style={{
              backgroundColor: designTokens.colors.background,
              borderRadius: designTokens.spacings.large,
              paddingHorizontal: designTokens.spacings.default,
            }}>
            Nenhum Item Encontrado
          </Text>
        </View>
      }
    </View>
  );
}