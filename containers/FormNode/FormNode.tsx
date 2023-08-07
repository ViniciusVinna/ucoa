import React from "react";
import { View, TextInput } from "react-native";

import { Dropdown } from "./Dropdown";
import { Label } from "./Label";

import { theme } from "@/theme";

const { designTokens } = theme;

export default function FormNode() {
  return (
    <View
      style={{
        alignItems: "flex-start",
        backgroundColor: designTokens.colors.background,
        borderRadius: designTokens.spacings.large,
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: designTokens.spacings.default,
        paddingVertical: designTokens.spacings.xlarge,
        width: "100%",
      }}
    >
      <Label>Conta Pai</Label>
      <Dropdown placeholder="Selecione uma conta pai:" data={[]} />

      <Label>Código</Label>
      <Dropdown placeholder="Código sugerido:" data={[]} />

      <Label>Nome</Label>
      <TextInput
        style={{
          backgroundColor: designTokens.colors.white,
          borderColor: designTokens.colors.white,
          borderRadius: designTokens.spacings.medium,
          flex: 1,
          marginBottom: designTokens.spacings.medium,
          padding: designTokens.spacings.medium,
          width: "100%",
        }}
      />

      <Label>Tipo</Label>
      <Dropdown placeholder="Selecione o tipo de conta:" data={[]}/>

      <Label>Aceita Lançamentos</Label>
      <Dropdown placeholder="Selecione uma opção:" data={[]} />
    </View>
  );
}