import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE_COLOR,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  bluetoothStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  bluetoothText: {
    fontSize: 16,
    fontWeight: "600",
  },
  scanArea: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  scanningText: {
    marginTop: 10,
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  instructionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  instructionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  successMessage: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  hiddenInput: {
    height: 1,
    width: 1,
    opacity: 0,
  },
  chipDisplay: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 20,
  },
});
