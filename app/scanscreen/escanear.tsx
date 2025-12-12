import HeaderComponent from "@/components/HeaderComponent";
import { View } from "react-native";
import { styles } from "./styles";

export default function EscanearScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent title="Escanear" />
    </View>
  );
}
