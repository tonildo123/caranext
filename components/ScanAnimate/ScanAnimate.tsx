import { images } from "@/assets/images";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet } from "react-native";

const ScanAnimate = () => {
  const scanAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        opacity: scanAnimation,
        alignItems: "center",
      }}
    >
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={images.scan}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
});

export default ScanAnimate;
