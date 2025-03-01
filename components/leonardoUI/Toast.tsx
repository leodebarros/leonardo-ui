import React, { useMemo } from "react";
import {
  Modal,
  StyleSheet,
  View as DefaultView,
  Pressable,
  useColorScheme,
} from "react-native";
import { useTheme } from "./Theme";
import { AntDesign } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { Text } from "./Text";

type ToastType = "info" | "success" | "warning" | "error";

interface ToastProps {
  isVisible: boolean;
  onRequestClose?: () => void;
  title: string;
  description: string;
  type: ToastType;
  showIcon?: boolean;
  linkCaption?: string;
  path?: Href;
}

const Toast: React.FC<ToastProps> = ({
  isVisible,
  onRequestClose,
  title,
  description,
  type,
  showIcon = true,
  linkCaption,
  path,
}) => {
  const theme = useTheme();
  const isDarkMode = useColorScheme() === "dark";

  const backgroundColor = useMemo(() => {
    if (isDarkMode) {
      switch (type) {
        case "success":
          return "#166534";
        case "error":
          return "#7f1d1d";
        case "info":
          return "#374151";
        case "warning":
          return "#78350f";
        default:
          return theme.colors.background;
      }
    } else {
      switch (type) {
        case "success":
          return "#dcfce7";
        case "error":
          return "#fee2e2";
        case "info":
          return "#fafafa";
        case "warning":
          return "#fef3c7";
        default:
          return "white";
      }
    }
  }, [type, useColorScheme()]);

  const iconName = useMemo(() => {
    switch (type) {
      case "success":
        return "checkcircle";
      case "error":
        return "closecircle";
      case "warning":
        return "warning";
      case "info":
        return "infocirlce";
    }
  }, [type]);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0)",
    },
    toastContainer: {
      width: "100%",
      height: "25%",
      borderRadius: theme.borderRadius.md,
      backgroundColor,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    topRight: {
      position: "absolute",
      top: theme.margin.sm,
      right: theme.margin.sm,
    },
    closeButton: {
      padding: 4,
    },
    toastTitle: {
      marginTop: theme.margin.md,
      marginBottom: theme.margin.sm,
    },
    toastDescription: {
      textAlign: "center",
      marginHorizontal: theme.margin.md,
    },
    linkText: {
      marginTop: theme.margin.sm,
      textDecorationLine: "underline",
    },
  });

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onRequestClose}
    >
      <DefaultView style={styles.modalContainer}>
        <DefaultView style={styles.toastContainer}>
          <DefaultView style={styles.topRight}>
            <Pressable style={styles.closeButton} onPress={onRequestClose}>
              <AntDesign
                name="close"
                size={24}
                color={theme.colors.textPrimary}
              />
            </Pressable>
          </DefaultView>
          {showIcon ? (
            <AntDesign
              name={iconName as keyof typeof AntDesign.glyphMap}
              size={36}
              color={theme.colors.textPrimary}
            />
          ) : null}
          <Text size="md" weight="bold" style={styles.toastTitle}>
            {title}
          </Text>
          <Text color="textSecondary" style={styles.toastDescription}>
            {description}
          </Text>
          {linkCaption && path && (
            <Link href={path} style={styles.linkText}>
              <Text weight="semibold">{linkCaption}</Text>
            </Link>
          )}
        </DefaultView>
      </DefaultView>
    </Modal>
  );
};

export default Toast;
