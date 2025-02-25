import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

export type FilterType = "default" | "primary" | "outline" | "ghost";

interface FilterProps {
  label: string;
  type?: FilterType;
  isActive?: boolean;
  onPress?: () => void;
}

const Filter: FC<FilterProps> = ({
  label,
  type = "default",
  isActive = false,
  onPress,
}) => {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  let backgroundColor = theme.colors.sidebarBg;
  let textColor = theme.colors.secondary;
  let borderWidth = 0;
  let borderColor = "transparent";

  switch (type) {
    case "primary":
      if (isActive) {
        backgroundColor = chosenPrimaryKey;
        textColor = theme.colors.white;
      } else {
        backgroundColor = theme.colors.sidebarBg;
        textColor = theme.colors.secondary;
      }
      break;

    case "outline":
      backgroundColor = "transparent";
      borderWidth = 1.3;
      borderColor = isActive ? chosenPrimaryKey : theme.colors.border;
      textColor = isActive ? chosenPrimaryKey : theme.colors.secondary;
      break;

    case "ghost":
      backgroundColor = isActive ? theme.colors.accentUsageBg : "transparent";
      textColor = isActive ? chosenPrimaryKey : theme.colors.secondary;
      break;

    case "default":
    default:
      if (isActive) {
        backgroundColor = theme.colors.antiOverBackground;
        textColor = theme.colors.overBackground;
      } else {
        backgroundColor = theme.colors.sidebarBg;
        textColor = theme.colors.secondary;
      }
      break;
  }

  const styles = StyleSheet.create({
    container: {
      paddingVertical: theme.padding.sm,
      paddingHorizontal: theme.padding.md,
      borderRadius: theme.borderRadius.lg,
      marginRight: theme.margin.sm,

      backgroundColor,
      borderWidth,
      borderColor,
    },
    text: {
      letterSpacing: 0.1,
      color: textColor,
      fontWeight: isActive ? theme.fontWeight.bold : theme.fontWeight.normal,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text size="sm" style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Filter;
