import { ThemedText } from "@/components/themed-text";
import { COLOR_BLANCO, COLOR_GRIS_ICONO, COLOR_NARANJA, COLOR_ROJO_CORTE } from "@/constants/theme";
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Necesitarás @expo/vector-icons
import { Stack, useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FormField = ({ label, value = '' }: { label: string; value?: string }) => (
  <View style={styles.fieldContainer}>
    <ThemedText style={styles.fieldLabel}>{label}</ThemedText>
    <View style={styles.inputWrapper}>
      <TextInput 
        style={styles.input} 
        value={value}
        placeholder=""
        editable={false}
      />
      <MaterialIcons name="arrow-drop-down" size={24} color={COLOR_GRIS_ICONO} style={styles.dropdownIcon} />
    </View>
  </View>
);

const ActionIcon = ({ iconName, counter, onPress }: { iconName: string; counter: number; onPress: () => void }) => (
  <TouchableOpacity style={styles.actionIcon} onPress={onPress}>
    {iconName === 'plus' && <FontAwesome5 name="plus-circle" size={30} color="#000" />}
    {iconName === 'water' && <FontAwesome5 name="tint" size={30} color="#000" />}
    {iconName === 'syringe' && <FontAwesome5 name="syringe" size={30} color="#000" />}
    {iconName === 'cross' && <FontAwesome5 name="plus" size={30} color="#000" />}
    
    {counter > 0 && (
      <View style={styles.badge}>
        <ThemedText style={styles.badgeText}>
          {counter > 99 ? '+99' : counter}
        </ThemedText>
      </View>
    )}
  </TouchableOpacity>
);


export default function ExistenciaDetalleScreen() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: String(id || "") }} />
      <SafeAreaView style={styles.screen}>
        <View style={styles.formContainer}>
          
          <FormField label="Especie" />
          <FormField label="Sexo" />
          <FormField label="Categoria" />
          <FormField label="Agrupamiento" />

          <TouchableOpacity style={styles.editButton}>
            <ThemedText style={styles.editButtonText}>Editar</ThemedText>
          </TouchableOpacity>
        </View>
        
        <View style={styles.actionBarContainer}>
          <ActionIcon iconName="plus" counter={3} onPress={() => {}} /> 
          <ActionIcon iconName="water" counter={3} onPress={() => {}} />
          <ActionIcon iconName="syringe" counter={3} onPress={() => {}} />
          <ActionIcon iconName="cross" counter={99} onPress={() => {}} />
        </View>
        
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR_BLANCO,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLOR_BLANCO,
  },
  headerIcon: { padding: 5 },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerLogo: { padding: 5 },
  logoCircle: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: COLOR_NARANJA,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeBorder: {
    height: 3,
    backgroundColor: COLOR_NARANJA,
    width: '100%',
  },

  formContainer: {
    padding: 20,
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  dropdownIcon: {
    marginRight: 5,
  },
  
  editButton: {
    backgroundColor: COLOR_NARANJA,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  editButtonText: {
    color: COLOR_BLANCO,
    fontSize: 20,
    fontWeight: 'bold',
  },

  actionBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: COLOR_BLANCO,
  },
  actionIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: 5,
    backgroundColor: COLOR_ROJO_CORTE,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    zIndex: 20,
  },
  badgeText: {
    color: COLOR_BLANCO,
    fontSize: 10,
    fontWeight: 'bold',
  },
});