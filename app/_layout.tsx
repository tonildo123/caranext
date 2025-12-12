import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="scanscreen/escanear"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="scanscreen/escanear_paso_dos"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="existencia" options={{ headerShown: false }} />
        <Stack.Screen name="planillas" options={{ headerShown: false }} />
        <Stack.Screen name="configuracion" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
