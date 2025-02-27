import React from "react";
import { View as DefaultView, Modal, StyleSheet } from "react-native";
import { Button, ButtonType } from "./Button";
import { useTheme } from "./Theme";
import { Text } from "./Text";

export type GhostType = "primary" | "default" | "ghost" | "destructive";

interface DialogProps {
  title?: string;
  message?: string;
  isVisible: boolean;
  onConfirm?: () => void;
  onCancel: () => void;
  onRequestClose?: () => void;
  type?: GhostType;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  isVisible,
  onConfirm,
  onCancel,
  onRequestClose,
  type = "primary",
}) => {
  const theme = useTheme();

  let upperButtonType: ButtonType;
  let lowerButtonType: ButtonType;

  switch (type) {
    case "primary":
      upperButtonType = "primary";
      lowerButtonType = "outline";
      break;
    case "default":
      upperButtonType = "default";
      lowerButtonType = "outline";
      break;
    case "ghost":
      upperButtonType = "primary";
      lowerButtonType = "ghost";
      break;
    case "destructive":
      upperButtonType = "default";
      lowerButtonType = "destructive";
      break;
    default:
      upperButtonType = "primary";
      lowerButtonType = "outline";
      break;
  }

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.81)",
    },
    modalContent: {
      width: "80%",
      padding: theme.padding.lg,
      backgroundColor: theme.colors.overBackground,
      borderRadius: theme.borderRadius.md,
    },
    modalTitle: {
      marginBottom: theme.margin.sm,
    },
    modalText: {
      color: theme.colors.textSecondary,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <DefaultView style={styles.modalContainer}>
        <DefaultView style={styles.modalContent}>
          <Text weight="bold" style={styles.modalTitle}>
            {title ?? "Confirm Action"}
          </Text>
          <Text style={styles.modalText}>
            {message ?? "Are you sure you want to perform this action?"}
          </Text>

          <DefaultView>
            <Button
              caption="Confirm"
              onPress={onConfirm}
              type={upperButtonType}
              style={{ marginBottom: 0 }}
            />
            <Button
              caption="Cancel"
              onPress={onCancel}
              type={lowerButtonType}
            />
          </DefaultView>
        </DefaultView>
      </DefaultView>
    </Modal>
  );
};

export default Dialog;
