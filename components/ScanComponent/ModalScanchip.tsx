import { colors } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScanAnimate from "../ScanAnimate/ScanAnimate";
import { styles } from "./styles";

interface ModalScanchipProps {
  showModal: boolean;
  closeModal: () => void;
  idPlanilla: string;
}

const ModalScanchip = ({
  showModal,
  closeModal,
  idPlanilla,
}: ModalScanchipProps) => {
  const [sensorInput, setSensorInput] = useState("");
  const inputRef = useRef(null);
  const readingTimerRef = useRef(null);
  const [backRed, setBackRed] = useState(false);
  const [backGreen, setBackGreen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleManualInput = (text: string) => {
    let cleanChipNumber = text
      .replace(/[^0-9]/g, "")
      .replace(/\s/g, "")
      .replace(/^\n|\n$/g, "");

    if (cleanChipNumber.startsWith("0032")) {
      cleanChipNumber = "032" + cleanChipNumber.substring(4);
      console.log("🔧 Normalizando chip: 0032 → 032");
    }

    if (cleanChipNumber.length > 15) {
      cleanChipNumber = cleanChipNumber.substring(0, 15);
    }
    setSensorInput(cleanChipNumber);

    // ✅ Limpiar el timer anterior
    if (readingTimerRef.current) {
      clearTimeout(readingTimerRef.current);
    }
  };

  // ✅ Función para validar el formato del chip
  const validateChipFormat = (chipNumber: string) => {
    // ✅ Remover espacios en blanco por si acaso
    const cleanChipNumber = chipNumber
      .replace(/\s/g, "")
      .replace(/[^0-9]/g, "")
      .replace(/^\n|\n$/g, "");

    if (!cleanChipNumber || cleanChipNumber.length < 15) {
      return { valid: false, error: "El número de chip es demasiado corto" };
    }

    // ✅ Debe comenzar con "032"
    if (!cleanChipNumber.startsWith("032")) {
      return {
        valid: false,
        error: "El chip debe comenzar con 032",
      };
    }

    // const isDuplicate = currentUpChip.some(
    //   (chip: string) => chip === cleanChipNumber
    // );

    // if (isDuplicate) {
    //   console.log("entro");
    //   return {
    //     valid: false,
    //     error: "El chip ya fue registrado en esta sesión",
    //   };
    // }

    return { valid: true };
  };

  useEffect(() => {
    setSensorInput("");
  }, []);

  useEffect(() => {
    if (showModal) {
      setSensorInput("");
      setErrorMessage("");
      setSuccessMessage("");
      setBackRed(false);
      setBackGreen(false);
    }
  }, [showModal]);

  useEffect(() => {
    const saveSensorInput = async () => {
      if (sensorInput.length !== 15) {
        return; // No hacer nada si no son 15 caracteres
      }

      const validation = validateChipFormat(sensorInput);
      console.log(validation);
      //   setCurrentUpChip((prev: any) => [...prev, sensorInput]); // ✅ Agregar chip a la sesión actual

      if (!validation.valid) {
        console.log("❌ Chip inválido:", validation.error);
        // @ts-ignore
        setErrorMessage(validation.error);
        setBackRed(true);

        setTimeout(() => {
          setBackRed(false);
          setSensorInput(""); // ✅ Limpiar para permitir nuevo intento
          setErrorMessage("");
        }, 2500);

        return;
      }

      // moverme a la siguiente screen
    };

    saveSensorInput();
  }, [sensorInput]); // ✅ Se ejecuta cada vez que cambia sensorInput

  useEffect(() => {
    return () => {
      if (readingTimerRef.current) {
        clearTimeout(readingTimerRef.current);
      }
    };
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalContent,
            backRed && { backgroundColor: "rgba(255, 0, 0, 1)" },
            backGreen && { backgroundColor: "rgba(76, 185, 120, 1)" },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.buttonStyleHeaderOnly,
              backRed && { backgroundColor: "rgba(255, 0, 0, 1)" },
              backGreen && { backgroundColor: "rgba(76, 185, 120, 1)" },
            ]}
            onPress={closeModal}
          >
            <MaterialCommunityIcons
              name="window-close"
              size={24}
              color={colors.BLACK_COLOR}
              style={{ marginRight: 0.1 }}
            />
          </TouchableOpacity>
          <ScanAnimate />
          {/* ✅ Mostrar mensajes dinámicos */}
          {errorMessage ? (
            <>
              <Text style={styles.styleTextError}>Error de validación</Text>
              <Text style={styles.styleTextSubError}>
                {errorMessage || "Error al escanear chip"}
              </Text>
            </>
          ) : successMessage ? (
            <>
              <Text style={styles.styleTextSuccess}>Chip válido</Text>
              <Text style={styles.styleTextSubSuccess}>{successMessage}</Text>
            </>
          ) : (
            <>
              <Text style={styles.styleText}>Escanear chip del animal</Text>
            </>
          )}

          <TextInput
            ref={inputRef}
            multiline={true}
            style={styles.manualInput}
            onChangeText={handleManualInput}
            keyboardType="numeric"
            value={sensorInput}
            autoFocus={true} // @ts-ignore
            onBlur={() => inputRef.current.focus()}
          />
          <Text style={styles.sensorInputDisplay}> {sensorInput}</Text>
          <Button
            color={colors.PRIMARY_COLOR}
            title="Finalizar lectura"
            onPress={closeModal}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalScanchip;
