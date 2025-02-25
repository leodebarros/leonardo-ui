import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "./Theme";

export type TextSize = "xs" | "sm" | "base" | "md" | "lg" | "xl";
export type FontWeight = "normal" | "semibold" | "bold";
interface TextProps extends RNTextProps {
  size?: TextSize;
  weight?: FontWeight;
  color?: keyof ReturnType<typeof useTheme>["colors"];
}

export const Text: React.FC<TextProps> = ({
  size = "base",
  weight = "normal",
  color = "textPrimary",
  style,
  ...props
}) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontSize: theme.fontSize[size],
      fontWeight: theme.fontWeight[weight],
      color: theme.colors[color],
    },
  });

  return <RNText style={[styles.text, style]} {...props} />;
};
