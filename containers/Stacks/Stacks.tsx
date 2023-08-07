import {  Stack } from "expo-router";

import { theme } from "@/theme";
const { designTokens } = theme;

import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type StacksProps = NativeStackNavigationOptions & { children: React.ReactNode };

export default function Stacks({ ...props }: Partial<StacksProps>) {
  return (
    <Stack
      screenOptions={{ ...designTokens.stackNavigatorStyles }}
      {...props}
    />
  );
}