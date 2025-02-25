import React, { FC } from "react";
import { Platform, StyleSheet, View as RNView } from "react-native";
import { Switch as RNSwitch } from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

export type SwitchType = "default" | "primary" | "ghost";

interface SwitchProps {
  label?: string;
  type?: SwitchType;
  value: boolean;
  onValueChange?: (val: boolean) => void;
  disabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({
  label,
  type = "default",
  value,
  onValueChange,
  disabled = false,
}) => {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  let trackColorOn = theme.colors.border;
  let trackColorOff = theme.colors.border;
  let thumbColorOn = theme.colors.white;
  let thumbColorOff = theme.colors.white;

  switch (type) {
    case "primary":
      trackColorOn = chosenPrimaryKey;
      trackColorOff = theme.colors.border;
      break;
    case "ghost":
      trackColorOn = theme.colors.accentUsageBg;
      trackColorOff = "transparent";
      thumbColorOn = chosenPrimaryKey;
      thumbColorOff = theme.colors.secondary;
      break;
    case "default":
    default:
      trackColorOn = theme.colors.antiOverBackground;
      trackColorOff = theme.colors.border;
      thumbColorOn = theme.colors.overBackground;
      thumbColorOff = theme.colors.white;
      break;
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      marginVertical: theme.margin.sm,
    },
    toggleButton:
      Platform.OS === "ios"
        ? {
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          }
        : {},
  });

  return (
    <RNView style={styles.container}>
      {label && <Text>{label}</Text>}

      <RNView>
        <RNSwitch
          style={[styles.toggleButton]}
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          trackColor={{ false: trackColorOff, true: trackColorOn }}
          thumbColor={value ? thumbColorOn : thumbColorOff}
        />
      </RNView>
    </RNView>
  );
};
