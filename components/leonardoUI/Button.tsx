import { forwardRef } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

type TouchableOpacityRef = React.ElementRef<typeof TouchableOpacity>;

export type ButtonType =
  | "default"
  | "primary"
  | "outline"
  | "ghost"
  | "destructive";

interface ButtonProps {
  type?: ButtonType;
  size?: "sm" | "base";
  style?: StyleProp<ViewStyle>;
  caption: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export const Button = forwardRef<TouchableOpacityRef, ButtonProps>(
  (
    {
      type = "default",
      size = "base",
      style,
      caption = "Click me",
      disabled = false,
      loading = false,
      onPress,
    },
    ref
  ) => {
    const theme = useTheme();
    const { chosenPrimaryKey } = useThemeActions();

    let backgroundColor: string;
    let textColor: string;

    switch (type) {
      case "primary":
        backgroundColor = chosenPrimaryKey;
        textColor = theme.colors.white;
        break;
      case "outline":
        backgroundColor = "transparent";
        textColor = chosenPrimaryKey;
        break;
      case "ghost":
        backgroundColor = theme.colors.accentUsageBg;
        textColor = chosenPrimaryKey;
        break;
      case "destructive":
        backgroundColor = theme.colors.destructive;
        textColor = "white";
        break;
      case "default":
      default:
        backgroundColor = theme.colors.antiOverBackground;
        textColor = theme.colors.overBackground;
        break;
    }

    const styles = StyleSheet.create({
      button: {
        height: size === "base" ? 39 : 27,
        flexDirection: "row",
        alignSelf: size === "base" ? "auto" : "flex-start",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:
          size === "base" ? theme.padding.lg : theme.padding.md,
        paddingVertical: size === "base" ? theme.padding.md : theme.padding.sm,
        marginVertical: theme.margin.md,
        borderRadius:
          size === "base" ? theme.borderRadius.md : theme.borderRadius.sm,
      },
      caption: {
        color: textColor,
        letterSpacing: 0.3,
      },
    });

    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.button,
          {
            backgroundColor,
            opacity: disabled || loading ? 0.5 : 1,
            borderWidth: type === "outline" ? 1.3 : 0,
            borderColor: chosenPrimaryKey,
          },
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text weight="semibold" size={size} style={styles.caption}>
            {caption}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);
