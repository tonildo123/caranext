import AsyncStorage from "@react-native-async-storage/async-storage";

// 5 tipos planillas
// planilla de existencia
// carga de manera inidividual los chips que se van a usar
// planilla de vacunacion 
// esta planilla puede repetir chips pero se difrencia por la vacuna aplicada, fecha, lote, etc
// planilla de sangrado
// puede repetir chips pero se difrencia por la fecha y hora del sangrado
// planilla de IATF
// planilla de diagnostico



const useStorageLocal = () => {

    const storeDataString = async (keyString, value) => {
        try {
          await AsyncStorage.setItem(keyString, value);
        } catch (e) {
          console.log('error', e);
        }
    };

    const storeDataObject = async (keyObject, value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(keyObject, jsonValue);
        } catch (e) {
            console.log('error', e);
        }
    };

    const getDataString = async (keyString) => {
        try {
          const value = await AsyncStorage.getItem(keyString);
          if (value !== null) {
            return value;
          }
        } catch (e) {
            console.log('error', e);
        }
    };

    const getDataObject = async (keyObject) => {
        try {
          const jsonValue = await AsyncStorage.getItem(keyObject);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log('error', e);
        }
      };

      const removeData = async (key) => {
        try {
          await AsyncStorage.removeItem(key);
        } catch (e) {
          console.log('error', e);
        }
      };

  return {
    storeDataString,
    storeDataObject,
    getDataString,
    getDataObject,
    removeData
  }
}

export default useStorageLocal
