import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="escanear" options={{ title: "Escanear" }} />
        <Stack.Screen name="existencia" options={{ title: "Existencia" }} />
        <Stack.Screen name="planillas" options={{ title: "Planillas" }} />
        <Stack.Screen
          name="configuracion"
          options={{ title: "Configuración" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
