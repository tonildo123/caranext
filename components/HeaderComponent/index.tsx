import { images } from "@/assets/images";
import { colors, FONT_SIZE } from "@/constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title?: string;
}

const HeaderComponent = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.buttonStyle}
    >
      <AntDesign name={"left"} size={24} color={colors.BLACK_COLOR} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={images.logo}
      />
    </TouchableOpacity>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.WHITE_COLOR,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  titleStyle: {
    fontSize: FONT_SIZE.small,
    fontWeight: "bold",
    color: colors.BLACK_COLOR,
  },
  imageStyle: {
    height: 50,
    width: 50,
    maxWidth: 60,
    maxHeight: 60,
  },
});
