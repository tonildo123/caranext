import { colors, FONT_SIZE } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderRadius: 10,
    backgroundColor: colors.WHITE_COLOR,
    padding: 24,
    marginHorizontal: 38,
  },
  buttonStyleHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: colors.WHITE_COLOR,
  },
  buttonStyleHeaderOnly: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: colors.WHITE_COLOR,
  },
  buttonCloseModal: {
    borderWidth: 2,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  // ✅ Estilos para mensajes de error
  styleTextError: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "bold",
    color: colors.WHITE_COLOR || "#FFFFFF",
    marginTop: 24,
    alignSelf: "center",
    textAlign: "center",
  },
  styleTextSubError: {
    fontSize: FONT_SIZE.small,
    fontWeight: "600",
    color: colors.WHITE_COLOR || "#FFFFFF",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 10,
  },
  // ✅ Estilos para mensajes de éxito
  styleTextSuccess: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "bold",
    color: colors.SUCCESS_COLOR || "#FFFFFF",
    marginTop: 24,
    alignSelf: "center",
    textAlign: "center",
  },
  styleTextSubSuccess: {
    fontSize: FONT_SIZE.small,
    fontWeight: "600",
    color: colors.SUCCESS_COLOR || "#FFFFFF",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 8,
  },
  styleText: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "bold",
    color: colors.BLACK_COLOR,
    marginTop: 24,
    alignSelf: "center",
    textAlign: "center",
  },
  styleTextSub: {
    fontSize: FONT_SIZE.small,
    fontWeight: "bold",
    color: colors.PRIMARY_COLOR,
    alignSelf: "center",
    textAlign: "center",
  },
  manualInput: {
    height: 1,
    color: colors.WHITE_COLOR,
  },
  sensorInputDisplay: {
    fontSize: 18,
    color: colors.BLACK_COLOR,
    alignSelf: "center",
  },
});
