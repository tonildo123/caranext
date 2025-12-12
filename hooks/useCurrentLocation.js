// useCurrentLocation.js
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';

const useCurrentLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState('undetermined'); // 'granted' | 'denied' | 'undetermined'

  // ✅ Función para obtener ubicación
  const fetchLocation = async () => {
    try {
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        maximumAge: 10000,
        timeout: 15000,
      });
      
      console.log('📍 Ubicación obtenida:', {
        lat: currentLocation.coords.latitude,
        lon: currentLocation.coords.longitude,
        accuracy: currentLocation.coords.accuracy
      });
      
      setLocation(currentLocation);
      setErrorMsg(null);
      return currentLocation;
    } catch (error) {
      console.error('❌ Error obteniendo ubicación:', error);
      setErrorMsg(error.message);
      return null;
    }
  };

  // ✅ Función para verificar y solicitar permisos
  const checkAndRequestPermission = async () => {
    try {
      setIsLoading(true);
      
      // Verificar estado actual
      const { status: currentStatus } = await Location.getForegroundPermissionsAsync();
      setPermissionStatus(currentStatus);
      
      if (currentStatus === 'granted') {
        await fetchLocation();
        setIsLoading(false);
        return true;
      }

      // Si no está determinado, solicitar
      if (currentStatus === 'undetermined') {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setPermissionStatus(status);
        
        if (status === 'granted') {
          await fetchLocation();
          setIsLoading(false);
          return true;
        }
      }
      
      // Permiso denegado
      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Error al verificar permisos:', error);
      setErrorMsg(error.message);
      setIsLoading(false);
      return false;
    }
  };

  // ✅ Mostrar alerta para abrir configuración
  const showPermissionAlert = () => {
    Alert.alert(
      '📍 Permisos de Ubicación Requeridos',
      'Para usar las funciones de SENASA necesitas habilitar el acceso a la ubicación.\n\n¿Deseas abrir la configuración para habilitarlos?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Abrir Configuración',
          onPress: () => {
            Linking.openSettings().catch(() => {
              Alert.alert(
                'Error',
                'No se pudo abrir la configuración. Abre manualmente: Configuración > Privacidad > Ubicación > SENASA',
                [{ text: 'Entendido' }]
              );
            });
          }
        },
        {
          text: 'Reintentar',
          onPress: checkAndRequestPermission
        }
      ],
      { cancelable: false }
    );
  };

  // ✅ Refrescar ubicación manualmente
  const refreshLocation = async () => {
    if (permissionStatus !== 'granted') {
      const granted = await checkAndRequestPermission();
      if (!granted) {
        showPermissionAlert();
        return null;
      }
    }
    
    setIsLoading(true);
    const newLocation = await fetchLocation();
    setIsLoading(false);
    return newLocation;
  };

  // ✅ Verificar permisos al montar
  useEffect(() => {
    checkAndRequestPermission();
  }, []);

  return { 
    location, 
    errorMsg, 
    isLoading, 
    permissionStatus,
    hasPermission: permissionStatus === 'granted',
    refreshLocation,
    requestPermission: checkAndRequestPermission,
    showPermissionAlert
  };
};

export default useCurrentLocation;