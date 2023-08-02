import React, { useState } from "react";
import { View } from "react-native";

import { ListNode } from "./ListNode";
import { SearchBar } from "./SearchBar";

import { useCases } from "@/core";

import {  theme } from "@/theme";

const { designTokens } = theme;

function flattenTree(tree: AccountEntity[]): AccountEntity[] {
  return tree.flatMap((node) => [node, ...(node.children ? flattenTree(node.children) : [])]);
}

export default function SearchNode() {
  const [accounts] = useState<AccountEntity[]>(
    flattenTree(useCases.account.store.data)
  );

  return (
    <View
      style={{
        paddingVertical: designTokens.spacings.default
      }}
    >
      <SearchBar />

      <View
        style={{
          backgroundColor: designTokens.colors.background,
          borderRadius: designTokens.spacings.large,
          paddingHorizontal: designTokens.spacings.default,
        }}>
        <ListNode data={accounts} />
      </View>
    </View>
  );
}