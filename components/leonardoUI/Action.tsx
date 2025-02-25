import React, { forwardRef } from "react";
import {
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { useTheme } from "./Theme";
import { AntDesign } from "@expo/vector-icons";
import { useThemeActions } from "@/store/themeContext";

type TouchableOpacityRef = React.ElementRef<typeof TouchableOpacity>;

export type ActionType = "primary" | "default" | "ghost" | "accent";

interface ActionProps {
  type?: ActionType;
  iconName: keyof typeof AntDesign.glyphMap;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Action = forwardRef<TouchableOpacityRef, ActionProps>(
  (
    {
      type = "default",
      iconName,
      iconSize = 18,
      style,
      disabled = false,
      onPress,
    },
    ref
  ) => {
    const theme = useTheme();
    const { chosenPrimaryKey } = useThemeActions();
    let backgroundColor: string;
    let iconColor: string;

    switch (type) {
      case "primary":
        backgroundColor = chosenPrimaryKey;
        iconColor = theme.colors.white;
        break;
      case "ghost":
        backgroundColor = "transparent";
        iconColor = chosenPrimaryKey;
        break;
      case "accent":
        backgroundColor = theme.colors.accentUsageBg;
        iconColor = chosenPrimaryKey;
        break;
      case "default":
      default:
        backgroundColor = theme.colors.antiOverBackground;
        iconColor = theme.colors.overBackground;
        break;
    }

    const styles = StyleSheet.create({
      container: {
        width: 33,
        height: 33,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        opacity: disabled ? 0.5 : 1,
        // Add margin, shadow, etc. as you like:
        // margin: theme.margin.medium,
        // shadowColor: "#000",
        // shadowOpacity: 0.2,
        // elevation: 2,
      },
    });

    return (
      <TouchableOpacity
        ref={ref}
        style={[styles.container, style]}
        onPress={onPress}
        disabled={disabled}
      >
        <AntDesign name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    );
  }
);
