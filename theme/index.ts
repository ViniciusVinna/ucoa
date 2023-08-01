import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type StackNavigatorStyles = Pick<NativeStackNavigationOptions, "headerBackTitleStyle" | "headerStyle" | "headerTintColor" | "headerTitleStyle" | "headerTitleAlign" | "headerLargeStyle" | "statusBarColor" | "navigationBarColor" | "contentStyle">;

const colors = {
  primary: "#632490",
  background: "#f0edf5",
  text: {
    dark: "#3d3d4c",
    medium: "#a1a0b2",
    light: "#c4c4d1",
    lighter: "#ffffff",
  }
} as const;

const fontWeights = {
  default: "400",
  bold: "700",
  bolder: "900",
} as const;

const stackNavigatorStyles: StackNavigatorStyles = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.text.lighter,
  headerTitleStyle: {
    fontWeight: fontWeights.bold,
  },
} as const;

/**
 * The Design Tokens of the application.
 *
 */
export const theme = {
  colors,
  stackNavigatorStyles,
} as const;