import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Inicio
      </ThemedText>

      <View style={styles.buttonContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/escanear")}
          >
            <ThemedText style={styles.buttonText}>ESCANEAR</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/existencia")}
          >
            <ThemedText style={styles.buttonText}>EXISTENCIA</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/planillas")}
          >
            <ThemedText style={styles.buttonText}>PLANILLAS</ThemedText>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.configButton]}
          onPress={() => router.push("/configuracion")}
        >
          <ThemedText style={styles.buttonText}>CONFIGURACIÓN</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  configButton: {
    backgroundColor: "#34C759",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
