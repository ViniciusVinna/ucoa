import React, { ReactNode } from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";

type HeaderProps = {
  children?: ReactNode;
  config?: Partial<NativeStackNavigationOptions>;
 }

export default function Header({ children, config = {  }} : HeaderProps) {
  return (
    <>
      <Stack.Screen
        options={{
          ...config
        }}
      />

      {children}
    </>
  );
}
