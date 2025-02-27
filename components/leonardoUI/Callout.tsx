import React, { forwardRef } from "react";
import {
  View as RNView,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Text } from "./Text";
import { Button, ButtonType } from "./Button";
import { useTheme } from "./Theme";

type RNViewRef = React.ElementRef<typeof RNView>;

export type CalloutType = "inverted" | "default" | "primary";

export interface CalloutProps {
  type?: CalloutType;
  title: string;
  message: string;
  buttonLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Callout = forwardRef<RNViewRef, CalloutProps>(
  (
    {
      type = "default",
      title,
      message,
      buttonLabel = "Upgrade",
      onPress,
      style,
    },
    ref
  ) => {
    const theme = useTheme();

    let containerBg: string;
    let borderColor: string;
    let titleColor: keyof ReturnType<typeof useTheme>["colors"];
    let messageColor: keyof ReturnType<typeof useTheme>["colors"];
    let buttonType = "default";

    switch (type) {
      case "inverted":
        containerBg = theme.colors.antiOverBackground;
        borderColor = theme.colors.antiOverBackground;
        titleColor = "overBackground";
        messageColor = "surface";
        buttonType = "primary";
        break;

      case "primary":
        containerBg = theme.colors.accentUsageBg;
        borderColor = theme.colors.antiOverBackground;
        titleColor = "textPrimary";
        messageColor = "textSecondary";
        buttonType = "primary";
        break;

      case "default":
      default:
        containerBg = theme.colors.accentUsageBg;
        borderColor = theme.colors.antiOverBackground;
        titleColor = "textPrimary";
        messageColor = "textSecondary";
        buttonType = "default";
        break;
    }

    const styles = StyleSheet.create({
      container: {
        minWidth: "100%",
        maxWidth: "100%",
        gap: 2,
        padding: theme.padding.md,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        backgroundColor: containerBg,
        borderColor: borderColor,
      },
      buttonWrap: {
        marginTop: theme.margin.sm,
        marginBottom: 0,
      },
    });

    return (
      <RNView ref={ref} style={[styles.container, style]}>
        <Text color={titleColor} weight="bold">
          {title}
        </Text>

        <Text color={messageColor} size="sm">
          {message}
        </Text>

        <Button
          caption={buttonLabel}
          size="sm"
          type={buttonType as ButtonType}
          onPress={onPress}
          style={styles.buttonWrap}
        />
      </RNView>
    );
  }
);
