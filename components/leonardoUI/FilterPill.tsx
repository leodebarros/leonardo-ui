import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

interface FilterPillProps {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
}

const FilterPill: React.FC<FilterPillProps> = ({
  label,
  isActive = false,
  onPress,
}) => {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: theme.padding.sm,
      paddingHorizontal: theme.padding.md,
      borderRadius: 15,
      marginRight: 5,
      backgroundColor: isActive ? chosenPrimaryKey : theme.colors.sidebarBg,
    },
    text: {
      letterSpacing: 0.1,
      color: isActive ? theme.colors.white : theme.colors.secondary,
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

export default FilterPill;
