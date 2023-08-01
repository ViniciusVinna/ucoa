import FontAwesome from "@expo/vector-icons/FontAwesome";

import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StackNavigator } from "../components";

export {
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    if (error) { throw error; }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <StackNavigator>
      <Stack.Screen name="other" options={{}} />
    </StackNavigator>
  );
}
