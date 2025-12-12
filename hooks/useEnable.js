import * as Network from 'expo-network';
import { useEffect, useState } from 'react';
import { BleManager, State } from 'react-native-ble-plx';

const managerBluetooth = new BleManager();

const useEnable = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnectedToBluetooth, setIsConnectedToBluetooth] = useState(false);

  useEffect(() => {
    const checkNetworkConnection = async () => {
      try {
        const networkState = await Network.getNetworkStateAsync();
        setIsConnected(networkState.isConnected);
      } catch (error) {
        console.error('Error checking network state:', error);
      }
    };

    const checkBluetoothState = async () => {
      try {
        const bluetoothState = await managerBluetooth.state();
        setIsConnectedToBluetooth(bluetoothState === State.PoweredOn);
      } catch (error) {
        console.error('Error checking Bluetooth state:', error);
      }
    };

    checkNetworkConnection();
    checkBluetoothState();

    const subscription = managerBluetooth.onStateChange((state) => {
      setIsConnectedToBluetooth(state === State.PoweredOn);
    }, true); 
    return () => {
      subscription.remove();
    };
  }, []);

  return { isConnected, isConnectedToBluetooth };
};

export default useEnable;
