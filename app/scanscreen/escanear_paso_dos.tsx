import HeaderComponent from "@/components/HeaderComponent";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function EscanearPasoDosScreen() {
  const router = useRouter();
  const { chipNumber } = useLocalSearchParams<{ chipNumber: string }>();

  return (
    <ThemedView style={styles.container}>
      <HeaderComponent title="Confirmar Chip" />

      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Chip Escaneado
        </ThemedText>

        <View style={styles.chipContainer}>
          <ThemedText style={styles.chipLabel}>Número de Chip:</ThemedText>
          <ThemedText style={styles.chipNumber}>{chipNumber}</ThemedText>
        </View>

        <View style={styles.infoContainer}>
          <ThemedText style={styles.infoText}>
            ✓ Longitud: {chipNumber?.length || 0} caracteres
          </ThemedText>
          <ThemedText style={styles.infoText}>
            ✓ Formato válido: Comienza con 032
          </ThemedText>
          <ThemedText style={styles.infoText}>
            ✓ Código de país: {chipNumber?.substring(0, 3)}
          </ThemedText>
          <ThemedText style={styles.infoText}>
            ✓ Código de especie: {chipNumber?.substring(3, 5)}
          </ThemedText>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={() => {
              // Aquí puedes guardar el chip o hacer lo que necesites
              alert("Chip confirmado: " + chipNumber);
              router.back();
            }}
          >
            <ThemedText style={styles.buttonText}>Confirmar</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <ThemedText style={styles.buttonText}>
              Escanear otro chip
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  chipContainer: {
    backgroundColor: "rgba(0, 122, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  chipLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    opacity: 0.7,
  },
  chipNumber: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  infoContainer: {
    backgroundColor: "rgba(76, 185, 120, 0.1)",
    padding: 20,
    borderRadius: 10,
    gap: 12,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#4CB978",
  },
  cancelButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
