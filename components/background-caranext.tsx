import { COLOR_BLANCO, COLOR_NARANJA } from '@/constants/theme';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function BackgroundCaranext() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={styles.orangeTop} />
      {/* <View style={styles.redCutout} /> */}
      <View style={styles.whiteCard} />
    </View>
  );
}

const styles = StyleSheet.create({  
  orangeTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: screenHeight * 0.35,
    backgroundColor: COLOR_NARANJA, 
    zIndex: 1,
  },
  // redCutout: {
  //   position: 'absolute',
  //   top: screenHeight * 0.35,
  //   left: 0,
  //   right: 0,
  //   height: 5,
  //   backgroundColor: COLOR_ROJO_CORTE, 
  //   zIndex: 2,
  // },
  whiteCard: {
    position: 'absolute',
    top: screenHeight * 0.15,
    left: 20,
    right: 20,
    height: screenHeight * 0.45,
    backgroundColor: COLOR_BLANCO,
    borderRadius: 15, 
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
});