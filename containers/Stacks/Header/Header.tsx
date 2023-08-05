import Icons from "@expo/vector-icons/Feather";
import React, { ReactNode } from "react";

import type { LinkProps } from "expo-router";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Link, Stack } from "expo-router";

import { theme } from "@/theme";

const { designTokens } = theme;

type HeaderProps = LinkProps<string> & {
  children?: ReactNode;
  config?: Partial<NativeStackNavigationOptions>;
 }

export default function Header({href = "/", config = {  }} : HeaderProps) {
  return (
    <Stack.Screen
      options={{
        ...config,
        headerLeft: () => (
          <Link
            href={href}
            style={{
              padding: designTokens.spacings.medium,
            }}
          >
            <Icons
              name="arrow-left"
              size={designTokens.sizes.large}
              color={designTokens.colors.text.lighter}
            />
          </Link>
        ),
      }}
    />
  );
}
