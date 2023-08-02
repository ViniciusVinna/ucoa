import {  Stack } from "expo-router";

import { theme } from "@/theme";
const { designTokens } = theme;

import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export default function SwitchRouter({ ...props }: NativeStackNavigationOptions & { children: React.ReactNode }) {
  return (
    <Stack
      screenOptions={{
        ...designTokens.stackNavigatorStyles,
      }}
      {...props}
    />
  );
}