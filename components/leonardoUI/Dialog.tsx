import React from "react";
import { View as DefaultView, Modal, StyleSheet } from "react-native";
import { Button } from "./Button";
import { useTheme } from "./Theme";
import { Text } from "./Text";

interface DialogProps {
  isVisible: boolean;
  onConfirm?: () => void;
  onCancel: () => void;
  onRequestClose?: () => void;
  type?: "primary" | "default";
}

const Dialog: React.FC<DialogProps> = ({
  isVisible,
  onConfirm,
  onCancel,
  onRequestClose,
  type = "primary",
}) => {
  const theme = useTheme();
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
            Confirm Action
          </Text>
          <Text style={styles.modalText}>
            Are you sure you want to perform this action?
          </Text>
          <DefaultView>
            <Button
              caption="Confirm"
              onPress={onConfirm}
              type={type}
              style={{ marginBottom: 0 }}
            />
            <Button caption="Cancel" onPress={onCancel} type="outline" />
          </DefaultView>
        </DefaultView>
      </DefaultView>
    </Modal>
  );
};

export default Dialog;
