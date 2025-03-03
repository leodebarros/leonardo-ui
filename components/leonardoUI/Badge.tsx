import React from "react";
import { View as RNView, FlexAlignType, StyleSheet } from "react-native";
import { Text } from "./Text";

export type BadgeTone =
  | "green"
  | "yellow"
  | "cyan"
  | "red"
  | "purple"
  | "neutral";

interface ChipParams {
  caption: string;
  tone: BadgeTone;
  size?: "sm" | "base";
  rounded?: "sm" | "full";
  alignSelf?: FlexAlignType;
}

const Chip = ({
  caption,
  tone,
  size = "base",
  rounded = "full",
  alignSelf = "flex-start",
}: ChipParams) => {
  const sprayTones = (tone: string) => {
    switch (tone) {
      case "green":
        return {
          backgroundColor: "#dcfce7", // tailwind green-100
          borderColor: "#bbf7d0", // tailwind green-200
          textColor: "#166534", // tailwind green-900
        };
      case "yellow":
        return {
          backgroundColor: "#fef9c3", // tailwind yellow-100
          borderColor: "#fde68a", // tailwind yellow-200
          textColor: "#713f12", // tailwind yellow-900
        };
      case "cyan":
        return {
          backgroundColor: "#cffafe", // tailwind cyan-100
          borderColor: "#a5f3fc", // tailwind cyan-200
          textColor: "#164e63", // tailwind cyan-900
        };
      case "red":
        return {
          backgroundColor: "#fee2e2", // tailwind red-100
          borderColor: "#fecaca", // tailwind red-200
          textColor: "#7f1d1d", // tailwind red-900
        };
      case "purple":
        return {
          backgroundColor: "#ede9fe", // tailwind purple-100
          borderColor: "#ddd6fe", // tailwind purple-200
          textColor: "#581c87", // tailwind purple-900
        };
      case "neutral":
        return {
          backgroundColor: "#f3f4f6", // tailwind gray-100
          borderColor: "#d1d5db", // tailwind gray-300
          textColor: "#1f2937", // tailwind gray-900
        };
      default:
        return {
          backgroundColor: "transparent",
          borderColor: "black",
          textColor: "black",
        };
    }
  };

  const { backgroundColor, borderColor, textColor } = sprayTones(tone);

  const styles = StyleSheet.create({
    caption: {
      color: textColor,
    },
    tagStyle: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      alignItems: "center",
      justifyContent: "center",
      alignSelf,
      backgroundColor,
      borderColor,
      borderWidth: 1,
      borderRadius: rounded === "sm" ? 8 : 9999,
    },
  });

  return (
    <RNView style={styles.tagStyle}>
      <Text size={size} weight="semibold" style={styles.caption}>
        {caption}
      </Text>
    </RNView>
  );
};

export default Chip;
