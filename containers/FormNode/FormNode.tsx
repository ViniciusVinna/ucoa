import React, { useReducer } from "react";
import { View, TextInput } from "react-native";

import { Dropdown } from "./Dropdown";
import { Label } from "./Label";
import { accountFormReducer, initialState } from "./hooks";
import { useCases } from "@/core";

import { theme } from "@/theme";

const { designTokens } = theme;


export default function FormNode() {
  const [state, dispatch] = useReducer(accountFormReducer, initialState);
  const { state: accounts } = useCases.accounts.hooks.useAccount();

  const nextChildCode = useCases.accounts.commands.getNextChildCode((accounts.at(-1) || {} as AccountEntity), accounts);
  const accountsList = accounts.map((account) => ({ label: `${account.code} - ${account.name}`, value: account.code }));
  const typesList = Object.values(useCases.accounts.constants.Dictionary).map((type) => ({ label: type, value: type }));
  const entriesList =["Sim", "Não"].map((type) => ({ label: type, value: type }));

  console.log({ accounts, nextChildCode });
  console.log({ state, dispatch });

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
      <Dropdown
        placeholder="Selecione uma conta pai:"
        data={accountsList}
      />

      <Label>Código</Label>
      <TextInput
        value={nextChildCode}
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
      <Dropdown placeholder="Selecione o tipo de conta:" data={typesList}/>

      <Label>Aceita Lançamentos</Label>
      <Dropdown placeholder="Selecione uma opção:" data={entriesList} />
    </View>
  );
}