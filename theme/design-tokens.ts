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
  },
  error: "#e28856",
  info: "#3182ce",
  success: "#12a454",
  successLight: "#F9FFF9",
  warning: "#e28856",
  warningLight: "#FFF9F9",
  white: "#ffffff",
} as const;

const fontWeights = {
  default: "400",
  bold: "700",
  bolder: "900",
} as const;

const sizes = {
  default: 16,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 40,
  xxxlarge: 56,
} as const;

const spacings = {
  default: 16,
  xsmall: 4,
  large: 24,
  medium: 16,
  small: 8,
  xlarge: 32,
  xxlarge: 40,
  xxxlarge: 56,
} as const;

const fontSizes = {
  small: 14,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 40,
  xxxlarge: 56,
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
export const designTokens = {
  colors,
  fontSizes,
  sizes,
  spacings,
  stackNavigatorStyles,
} as const;