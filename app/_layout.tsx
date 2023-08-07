import Icons from "@expo/vector-icons/Feather";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import { Stacks } from "@/containers";
import { useCases } from "@/core";

export {
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...Icons.font,
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
    <useCases.account.store.AccountProvider>
      <Stacks />
    </useCases.account.store.AccountProvider>
  );
}
