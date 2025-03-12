import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  View as RNView,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "./Theme";
import Badge from "./Badge";
import { Text } from "./Text";
import { Href, Link } from "expo-router";
import { useThemeActions } from "@/store/themeContext";

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
      borderTopWidth: 0.7,
      borderLeftWidth: 0.7,
      borderRightWidth: 0.7,
      borderColor: theme.colors.border,
    },
    card: {
      minWidth: "100%",
      maxWidth: "100%",
      marginBottom: theme.margin.md,
      borderTopLeftRadius: !cover ? theme.borderRadius.md : 0,
      borderTopRightRadius: !cover ? theme.borderRadius.md : 0,
      borderBottomLeftRadius: theme.borderRadius.md,
      borderBottomRightRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.surface,
      padding: paddingValue,
    },
  });

  return (
    <RNView style={styles.container}>
      {cover && (
        <Image source={cover} style={styles.coverImage} resizeMode="cover" />
      )}

      <RNView style={[styles.card, style]}>{children}</RNView>
    </RNView>
  );
}

Card.PreHeader = function CardPreHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    preHeader: {
      marginBottom: theme.margin.xs,
    },
  });

  return (
    <Text size="sm" color="textSecondary" style={styles.preHeader}>
      {children}
    </Text>
  );
};

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
      maxWidth: "100%",
    },
    description: {
      color: theme.colors.textSecondary,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <RNView style={styles.container}>
      <Text color="textSecondary" style={styles.description}>
        {children}
      </Text>
    </RNView>
  );
};

interface CardFooterProps {
  text?: string;
  button: React.ReactNode;
  badgeTone?: "green" | "yellow" | "cyan" | "red" | "purple" | "neutral";
  chipSize?: "sm" | "base";
  buttonPath?: Href;
  textPath?: Href;
}

Card.Footer = function CardFooter({
  text,
  button,
  badgeTone,
  chipSize = "base",
  buttonPath,
  textPath,
}: CardFooterProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

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
      flexBasis: "50%",
      textAlign: "right",
      paddingHorizontal: theme.padding.md,
      color: textPath ? chosenPrimaryKey : theme.colors.textSecondary,
    },
    footerButtonContainer: {
      maxWidth: "50%",
    },
  });

  return (
    <RNView style={styles.footerContainer}>
      {buttonPath ? (
        <Link href={buttonPath}>
          <RNView style={styles.footerButtonContainer}>{button}</RNView>
        </Link>
      ) : (
        <RNView style={styles.footerButtonContainer}>{button}</RNView>
      )}
      {text && badgeTone ? (
        <Badge
          alignSelf="center"
          caption={text}
          tone={badgeTone}
          size={chipSize}
        />
      ) : textPath ? (
        <Link href={textPath}>
          <Text
            color="textSecondary"
            style={styles.footerText}
            numberOfLines={2}
          >
            {text}
          </Text>
        </Link>
      ) : (
        <Text style={styles.footerText} numberOfLines={2}>
          {text}
        </Text>
      )}
    </RNView>
  );
};

export default Card;
