import { COLOR_BLANCO, COLOR_NARANJA } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Image
              source={require("../assets/images/logo-caranext3.png")}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
                marginRight: 5,
              }}
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
        <Stack.Screen
          name="scanscreen/escanear"
          options={{ title: "Escanear" }}
        />
        <Stack.Screen
          name="scanscreen/escanear_paso_dos"
          options={{ title: "Confirmar Chip" }}
        />
        <Stack.Screen
          name="existencia/existencia"
          options={{ title: "Existencias" }}
        />
        <Stack.Screen name="planillas" options={{ title: "Planillas" }} />
        <Stack.Screen
          name="configuracion"
          options={{ title: "Configuración" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
