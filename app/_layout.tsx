import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    Neuton: require("../assets/fonts/Neuton-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="dark" backgroundColor="#FFF6EF" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="product_info/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="product_info"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
