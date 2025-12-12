import { ThemedText } from "@/components/themed-text";
import {
  COLOR_BLANCO,
  COLOR_GRIS_ICONO,
  COLOR_NARANJA,
  COLOR_ROJO_TEXTO,
} from "@/constants/theme";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ExistenciaData {
  id: string;
  codigo: string;
  categoria: string;
  raza: string;
  agrupamiento: string;
  cantidad: number;
  icono: string;
}

const existenciasData = [
  {
    id: "1",
    codigo: "321010000000089",
    categoria: "Categoria de animal",
    raza: "Raza",
    agrupamiento: "Nombre del agrupamiento",
    cantidad: 25,
    icono: "cow",
  },
  {
    id: "2",
    codigo: "321010000000089",
    categoria: "Categoria de animal",
    raza: "Raza",
    agrupamiento: "Nombre del agrupamiento",
    cantidad: 25,
    icono: "pasture",
  },
];

const ExistenciaItem = ({ item, router }: { item: ExistenciaData; router: ReturnType<typeof useRouter> }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => router.push(`/existencia/${item.id}`)}
  >
    <View style={styles.iconWrapper}>
      <FontAwesome5
        name={item.icono}
        size={30}
        color={COLOR_GRIS_ICONO}
        style={{ marginRight: 10 }}
      />
    </View>

    <View style={styles.infoWrapper}>
      <ThemedText style={styles.itemCodigo}>{item.codigo}</ThemedText>
      <ThemedText style={styles.itemDetails}>
        <ThemedText style={styles.itemCategory}>{item.categoria}</ThemedText>
        <ThemedText style={styles.itemRaza}> | {item.raza}</ThemedText>
      </ThemedText>
      <ThemedText style={styles.itemDetails}>{item.agrupamiento}</ThemedText>
    </View>

    <View style={styles.cantidadBox}>
      <ThemedText style={styles.cantidadText}>{item.cantidad}</ThemedText>
    </View>
  </TouchableOpacity>
);

export default function ExistenciaScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.countSection}>
        <ThemedText style={styles.countText}>
          {existenciasData.length} existencias
        </ThemedText>

        <TouchableOpacity style={styles.crearButton}>
          <ThemedText style={styles.crearButtonText}>+ Crear</ThemedText>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.listContainer}>
        {existenciasData.map((item) => (
          <ExistenciaItem key={item.id} item={item} />
        ))}
      </View> */}

      {/* 3. Lista de Existencias */}
      <FlatList
        data={existenciasData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExistenciaItem item={item} router={router} />}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.filterButton}>
        <ThemedText style={styles.filterButtonText}>Filtrar</ThemedText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_BLANCO,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR_BLANCO,
  },
  headerIcon: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerLogo: {
    padding: 5,
  },
  logoCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: COLOR_NARANJA,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  orangeBorder: {
    height: 3,
    backgroundColor: COLOR_NARANJA,
    width: "100%",
  },

  countSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: -10,
  },
  countText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR_ROJO_TEXTO,
  },
  crearButton: {
    backgroundColor: COLOR_NARANJA,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  crearButtonText: {
    color: COLOR_BLANCO,
    fontWeight: "bold",
    fontSize: 16,
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  iconWrapper: {
    marginRight: 10,
  },
  infoWrapper: {
    flex: 1,
  },
  itemCodigo: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_ROJO_TEXTO,
  },
  itemDetails: {
    fontSize: 14,
    color: COLOR_GRIS_ICONO,
    marginTop: 2,
  },
  itemCategory: {
    fontWeight: "bold",
  },
  itemRaza: {
    fontWeight: "normal",
  },
  cantidadBox: {
    width: 40,
    height: 40,
    backgroundColor: "#DEDEDE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  cantidadText: {
    fontSize: 16,
    color: COLOR_GRIS_ICONO,
    fontWeight: "bold",
  },

  filterButton: {
    backgroundColor: "#333333",
    paddingVertical: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  filterButtonText: {
    color: COLOR_BLANCO,
    fontSize: 18,
    fontWeight: "bold",
  },
});
