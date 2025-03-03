import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View as RNView,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "./Theme";
import { Text } from "./Text";

interface InputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  validationType?: ValidationType;
  validationText?: string;
  // Revise
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function Input({
  label,
  disabled = false,
  containerStyle,
  inputStyle,
  size = "md",
  fullWidth = true,
  validationType,
  validationText,
  // Revise
  leftIcon,
  rightIcon,
  ...textInputProps
}: InputProps) {
  const theme = useTheme();

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          fontSize: theme.fontSize.sm,
          height: 36,
        };
      case "lg":
        return {
          fontSize: theme.fontSize.lg,
          height: 47,
        };
      case "md":
      default:
        return {
          fontSize: theme.fontSize.md,
          height: 42,
        };
    }
  };

  const getColor = (validationType: string) => {
    switch (validationType) {
      case "error":
        return theme.colors.destructive;
      case "success":
        return theme.colors.success;
      case "info":
      default:
        return theme.colors.secondary;
    }
  };

  const sizeStyles = getSizeStyles();

  const styles = StyleSheet.create({
    container: {
      width: fullWidth ? "100%" : "auto",
    },
    label: {
      marginBottom: theme.margin.xs,
      paddingLeft: theme.padding.xs,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: getColor(validationType!),
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.background,
    },
    leftIconContainer: {
      paddingLeft: theme.padding.sm,
    },
    rightIconContainer: {
      paddingRight: theme.padding.sm,
    },
    input: {
      flex: 1,
      paddingHorizontal: theme.padding.md,
      height: sizeStyles.height,
      fontSize: sizeStyles.fontSize,
    },
    spacer: {
      marginBottom: theme.margin.md,
    },
  });

  return (
    <RNView style={[styles.container, containerStyle]}>
      {label && (
        <Text
          size="sm"
          color={disabled ? "textSidebar" : "textPrimary"}
          style={styles.label}
        >
          {label}
        </Text>
      )}

      <RNView style={styles.inputContainer}>
        {leftIcon && (
          <RNView style={styles.leftIconContainer}>{leftIcon}</RNView>
        )}

        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={
            disabled ? theme.colors.textSidebar : theme.colors.secondary
          }
          editable={!disabled}
          {...textInputProps}
        />

        {rightIcon && (
          <RNView style={styles.rightIconContainer}>{rightIcon}</RNView>
        )}
      </RNView>
      {validationType !== undefined && validationText ? (
        <Input.Validation type={validationType}>
          {validationText}
        </Input.Validation>
      ) : (
        <RNView style={styles.spacer} />
      )}
    </RNView>
  );
}

export type ValidationType = "error" | "info" | "success";

interface InputValidationProps {
  children: React.ReactNode;
  type?: "error" | "info" | "success";
}

Input.Validation = function InputValidation({
  children,
  type = "info",
}: InputValidationProps) {
  const theme = useTheme();

  const getColor = () => {
    switch (type) {
      case "error":
        return theme.colors.destructive;
      case "success":
        return theme.colors.success;
      case "info":
      default:
        return theme.colors.textSecondary;
    }
  };

  const styles = StyleSheet.create({
    validationText: {
      color: getColor(),
      marginTop: theme.margin.xs,
      marginBottom: theme.margin.md,
      paddingLeft: theme.padding.xs,
    },
  });

  return (
    <Text size="sm" style={styles.validationText}>
      {children}
    </Text>
  );
};

export default Input;
