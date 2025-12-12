/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const isPlatformIos = Platform.OS === "ios";
export const isPlatformAndroid = Platform.OS === "android";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
export const colors = {
  PRIMARY_COLOR: "#FF5F1F", // sky blue color ahora debe ser naranja
  SECONDARY_COLOR: "#4B3B2B", // yellow color ahora debe ser oscuro
  SUCCES_COLOR: "#50B148", // green color
  ERROR_COLOR: "#EE4D4D", // red color
  GREY_COLOR: "#C6C6C6", // grey color
  GREY_LIGHT: "#B6B4C2", // light grey color
  GREY_WELCOME: "#A5A3B0",
  GREY_LIGHT_TWO: "#F5F5F5",
  GREY_DARK: "#666666", // dark grey color
  GREY_STRONGE: "#7E7E7E", // grey stronge color
  BLACK_COLOR: "#000000", // black color
  WHITE_COLOR: "#FFFFFF", // white color
  BROWN_COLOR: "#D67A52", // brown color
  SUCCESS_COLOR: "#28A745", // success green color
  WARNING_COLOR: "#FFC107", // warning yellow color
  INFO_COLOR: "#17A2B8", // info blue color
};
export const FONT_SIZE = {
  small: isPlatformIos ? 14 : 16,
  smallMedium: isPlatformIos ? 16 : 19,
  medium: isPlatformIos ? 18 : 22,
  bigger: isPlatformIos ? 24 : 28,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
