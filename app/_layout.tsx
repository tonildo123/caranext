import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { COLOR_BLANCO, COLOR_NARANJA } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, View } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Image
              source={require("../assets/images/logo-caranext3.png")}
              style={{ width: 40, height: 40, resizeMode: "contain", marginRight: 5 }}
            />
          ),
          headerShadowVisible: false,
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: COLOR_BLANCO,
                borderBottomColor: COLOR_NARANJA,
                borderBottomWidth: 2,
              }}
            />
          ),
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="escanear" options={{ title: "Escanear" }} />
        <Stack.Screen name="existencia" options={{ title: "Existencias" }} />
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
