import ModalScanchip from "@/components/ScanComponent/ModalScanchip";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import useEnable from "@/hooks/useEnable";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { BleManager } from "react-native-ble-plx";

export default function HomeScreen() {
  const router = useRouter();
  const { isConnectedToBluetooth } = useEnable();
  const [showModal, setShowModal] = useState(false);
  const [bleManager] = useState(() => new BleManager());

  useEffect(() => {
    return () => {
      bleManager.destroy();
    };
  }, []);

  const handleOpenScanner = () => {
    if (isConnectedToBluetooth) {
      Alert.alert(
        "Bluetooth desactivado",
        "Para escanear chips necesitas activar el Bluetooth. ¿Deseas activarlo ahora?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Activar",
            onPress: async () => {
              if (Platform.OS === "android") {
                try {
                  await bleManager.enable();
                  setTimeout(() => {
                    setShowModal(true);
                  }, 1000);
                } catch (error) {
                  console.error("Error al activar Bluetooth:", error);
                  Alert.alert(
                    "Error",
                    "No se pudo activar el Bluetooth. Por favor, actívalo manualmente desde Configuración."
                  );
                }
              } else {
                Alert.alert(
                  "Configuración",
                  "Por favor, activa el Bluetooth desde Configuración de iOS."
                );
              }
            },
          },
        ]
      );
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Inicio
      </ThemedText>

      <View style={styles.buttonContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.button} onPress={handleOpenScanner}>
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

      <ModalScanchip
        showModal={showModal}
        closeModal={closeModal}
        idPlanilla={`PLAN-${Date.now()}`}
      />
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
