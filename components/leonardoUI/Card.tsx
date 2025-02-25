import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "./Theme";
import Chip from "./Chip";
import { Text } from "./Text";

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: "md" | "lg";
  cover?: ImageSourcePropType;
}

function Card({ children, style, padding = "lg", cover }: CardProps) {
  const theme = useTheme();
  const paddingValue = theme.padding[padding];

  const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    coverImage: {
      minWidth: "100%",
      maxWidth: "100%",
      height: 200,
      borderTopLeftRadius: theme.borderRadius.md,
      borderTopRightRadius: theme.borderRadius.md,
    },
    card: {
      width: "100%",
      marginBottom: theme.margin.md,
      borderTopLeftRadius: !cover ? theme.borderRadius.md : 0,
      borderTopRightRadius: !cover ? theme.borderRadius.md : 0,
      borderBottomLeftRadius: theme.borderRadius.md,
      borderBottomRightRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.surface,
      padding: paddingValue,
      overflow: "hidden",
    },
  });

  return (
    <View style={styles.container}>
      {cover && (
        <Image source={cover} style={styles.coverImage} resizeMode="cover" />
      )}

      <View style={[styles.card, style]}>{children}</View>
    </View>
  );
}

Card.Title = function CardTitle({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    title: {
      marginBottom: theme.margin.sm,
    },
  });

  return (
    <Text size="md" weight="bold" style={styles.title}>
      {children}
    </Text>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      minWidth: "100%",
    },
    description: {
      color: theme.colors.textSecondary,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <View style={styles.container}>
      <Text color="textSecondary" style={styles.description}>
        {children}
      </Text>
    </View>
  );
};

interface CardFooterProps {
  text?: string;
  button: React.ReactNode;
  chipTone?: "green" | "yellow" | "cyan" | "red" | "purple" | "neutral";
}

Card.Footer = function CardFooter({ text, button, chipTone }: CardFooterProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    footerContainer: {
      marginTop: theme.margin.md,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
      paddingTop: theme.padding.sm,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    footerText: {
      flexBasis: "40%",
      maxWidth: "40%",
      textAlign: "right",
      paddingHorizontal: theme.padding.md,
    },
    footerButtonContainer: {
      maxWidth: "60%",
    },
  });

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerButtonContainer}>{button}</View>

      {text && chipTone ? (
        <Chip alignSelf="center" caption={text} tone={chipTone} />
      ) : (
        <Text color="textSecondary" style={styles.footerText} numberOfLines={1}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default Card;
