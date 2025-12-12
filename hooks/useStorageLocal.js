import AsyncStorage from "@react-native-async-storage/async-storage";

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
