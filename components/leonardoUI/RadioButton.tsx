import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";

interface RadioButtonProps {
  /** Whether the radio button is currently selected. */
  selected: boolean;
  /** Handler called when the user presses the radio button. */
  onPress: () => void;
  /** Disable the button and make it non-interactive. */
  disabled?: boolean;
  /** Optional style overrides for the outer container. */
  style?: StyleProp<ViewStyle>;
}

function RadioButton({
  selected,
  onPress,
  disabled = false,
  style,
}: RadioButtonProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderRadius: theme.borderRadius.full,
      width: 27,
      height: 27,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    innerCircle: {
      width: 18,
      height: 18,
      borderRadius: theme.borderRadius.full,
      backgroundColor: chosenPrimaryKey,
    },
  });

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        disabled && { opacity: 0.5 }, // reduce opacity if disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {/* Only render the inner circle if the radio is selected */}
      {selected && <View style={styles.innerCircle} />}
    </TouchableOpacity>
  );
}

export default RadioButton;
