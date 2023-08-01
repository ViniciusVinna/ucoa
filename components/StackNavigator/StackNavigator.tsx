import {  Stack } from "expo-router";

import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { theme } from "../../theme";

export default function StackNavigator({ children = null, ...props }: NativeStackNavigationOptions & { children: React.ReactNode }) {
  return (
    <Stack
      screenOptions={{
        ...theme.stackNavigatorStyles,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
}