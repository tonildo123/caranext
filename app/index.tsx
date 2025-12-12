import BackgroundCaranext from "@/components/background-caranext";
import { ThemedText } from "@/components/themed-text";
import { COLOR_BLANCO, COLOR_GRIS_ICONO, COLOR_NARANJA, COLOR_ROJO_CORTE, COLOR_ROJO_TEXTO } from "@/constants/theme";
import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const screenHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <BackgroundCaranext />

      <View style={styles.contentContainer}>
        {/* <ThemedText style={styles.logoTitle}>Caranext</ThemedText> */}
        <Image
          source={require("../assets/images/logo-caranext2.png")}
          style={styles.logoImage}
          accessible
          accessibilityLabel="Logo Caranext"
        />

        <View style={styles.cardContent}>
          <View>
            <ThemedText style={styles.caravanaTextHeader}>CARAVANA</ThemedText>
            <ThemedText style={styles.caravanaTextHeader}>
              ELECTRÓNICA
            </ThemedText>

            <ThemedText style={styles.caravanaTextDetail}>
              Caravana Botón
            </ThemedText>
            <ThemedText style={styles.caravanaTextDetail}>
              Hembra inviolable
            </ThemedText>
            <ThemedText style={styles.caravanaTextDetail}>
              (RIFD) FDX-B.
            </ThemedText>
            <ThemedText style={styles.caravanaTextDetailSmall}>
              Incluye macho
            </ThemedText>
            <ThemedText style={styles.caravanaTextDetailSmall}>
              c/ punta metálica.
            </ThemedText>
            <ThemedText style={styles.caravanaTextDetailSmall}>
              BOLSA 25 UNIDADES
            </ThemedText>
          </View>

          <View style={styles.caravanaImagePlaceholder}>
            <ThemedText style={{ fontSize: 50 }}>🏷️</ThemedText>
            {/* En la app real, iría: <Image source={require('./ruta/caravana.png')} style={...} /> */}
          </View>
        </View>

        <ThemedText style={[styles.appNameSeparator, styles.iconLabelRed]}>
          Nombre de la app
        </ThemedText>

        <View style={styles.buttonsIconRow}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/escanear")}
          >
            <ThemedText style={styles.iconText}>📶</ThemedText>
            <ThemedText style={styles.iconLabel}>Escanear</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/existencia")}
          >
            <ThemedText style={styles.iconText}>🐄</ThemedText>
            <ThemedText style={[styles.iconLabel, styles.iconLabelRed]}>
              Existencias
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push("/planillas")}
          >
            <ThemedText style={styles.iconText}>🧮</ThemedText>
            <ThemedText style={styles.iconLabel}>Planillas</ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.configContainer}>
          <ThemedText style={styles.configIcon}>⚙️</ThemedText>
          <ThemedText style={styles.configLabel}>Configuración</ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_BLANCO,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    zIndex: 10,
  },
  logoImage: {
    width: 250,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: screenHeight * 0.1,
  },
  logoTitle: {
    color: COLOR_BLANCO,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: screenHeight * 0.1,
  },
  cardContent: {
    position: "absolute",
    top: screenHeight * 0.15 + 120,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11,
    gap: 80,
  },
  caravanaTextHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLOR_NARANJA,
    lineHeight: 30,
  },
  caravanaTextDetail: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    lineHeight: 18,
  },
  caravanaTextDetailSmall: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 14,
  },
  caravanaImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
    overflow: "hidden",
  },
  appNameSeparator: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLOR_ROJO_CORTE,
    marginTop: screenHeight * 0.38,
    marginBottom: 20,
    textAlign: "left",
  },
  buttonsIconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  iconButton: {
    flex: 1,
    backgroundColor: COLOR_BLANCO,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
    borderWidth: 3,
    borderColor: "#E0E0E0",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.15,
    // shadowRadius: 2,
    // elevation: 3,
  },
  iconText: {
    fontSize: 35,
    marginBottom: 5,
    color: COLOR_GRIS_ICONO,
  },
  iconLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: COLOR_GRIS_ICONO,
    textAlign: "center",
  },
  iconLabelRed: {
    color: COLOR_ROJO_TEXTO,
    fontWeight: "bold",
  },
  configContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  configIcon: {
    fontSize: 30,
    color: COLOR_GRIS_ICONO,
  },
  configLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: COLOR_GRIS_ICONO,
    marginTop: 5,
  },
});
