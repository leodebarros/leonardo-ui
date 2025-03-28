import * as React from "react";
import { StyleProp, StyleSheet, View as RNView, ViewStyle } from "react-native";
import { useTheme } from "./Theme";
import { Text } from "./Text";
import { Button } from "./Button";
import { useThemeActions } from "@/store/themeContext";
import { AntDesign } from "@expo/vector-icons";
import Badge from "./Badge";

export type TierType = "primary" | "default" | "outline" | "ghost";

interface TierProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  type?: TierType;
  features?: string[];
  discount?: string;
  recommended?: boolean;
  style?: StyleProp<ViewStyle>;
  onSelect?: () => void;
  buttonCaption?: string;
}

function Tier({
  title,
  price,
  period = "month",
  description,
  type = "default",
  features = [],
  discount,
  recommended = false,
  style,
  onSelect,
  buttonCaption = "Select Plan",
}: TierProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  const getTierStyles = () => {
    switch (type) {
      case "primary":
        return {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          textColor: theme.colors.white,
          secondaryTextColor: theme.colors.textSecondary,
        };
      case "outline":
        return {
          backgroundColor: theme.colors.background,
          borderColor: chosenPrimaryKey,
          textColor: theme.colors.white,
          secondaryTextColor: theme.colors.textSecondary,
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          borderColor: theme.colors.border,
          textColor: theme.colors.textPrimary,
          secondaryTextColor: theme.colors.textSecondary,
        };
      case "default":
      default:
        return {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          textColor: theme.colors.textPrimary,
          secondaryTextColor: theme.colors.textSecondary,
        };
    }
  };

  const tierStyles = getTierStyles();

  const styles = StyleSheet.create({
    container: {
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
      borderColor: tierStyles.borderColor,
      backgroundColor: tierStyles.backgroundColor,
      marginBottom: theme.margin.sm,
      padding: theme.padding.lg,
      overflow: "hidden",
    },
    recommendedBadge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: theme.colors.success,
      paddingHorizontal: theme.padding.md,
      paddingVertical: theme.padding.md,
      borderBottomLeftRadius: theme.borderRadius.md,
    },
    header: {
      marginBottom: theme.margin.md,
    },
    title: {
      color: tierStyles.textColor,
      marginBottom: theme.margin.xs,
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "flex-end",
      marginBottom: theme.margin.xs,
    },
    price: {
      fontSize: 32,
      fontWeight: "bold",
    },
    period: {
      marginBottom: 4,
      marginLeft: 4,
      color: tierStyles.secondaryTextColor,
    },
    description: {
      marginBottom: theme.margin.md,
      color: tierStyles.secondaryTextColor,
    },
    discountContainer: {
      alignSelf: "flex-start",
      marginBottom: theme.margin.md,
    },
    featuresList: {
      marginBottom: theme.margin.lg,
    },
    featureItem: {
      flexDirection: "row",
      marginBottom: theme.margin.sm,
      alignItems: "center",
    },
    featureBullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: tierStyles.secondaryTextColor,
      marginRight: theme.margin.sm,
    },
    featureText: {
      color: tierStyles.secondaryTextColor,
    },
    buttonContainer: {
      marginTop: "auto",
    },
  });

  return (
    <RNView style={[styles.container, style]}>
      {recommended && (
        <RNView style={styles.recommendedBadge}>
          <Text size="sm" color="white" weight="bold">
            MOST POPULAR
          </Text>
        </RNView>
      )}

      <RNView style={styles.header}>
        <Text size="lg" weight="bold">
          {title}
        </Text>

        <RNView style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text size="sm" style={styles.period}>
            /{period}
          </Text>
        </RNView>

        {description && (
          <Text size="sm" style={styles.description}>
            {description}
          </Text>
        )}

        {discount && (
          <RNView style={styles.discountContainer}>
            <Badge size="sm" tone="red" caption={discount} />
          </RNView>
        )}
      </RNView>

      <RNView style={styles.featuresList}>
        {features.map((feature, index) => (
          <Tier.Feature key={index} textColor={tierStyles.secondaryTextColor}>
            {feature}
          </Tier.Feature>
        ))}
      </RNView>

      <RNView style={styles.buttonContainer}>
        <Button
          caption={buttonCaption}
          type={type}
          onPress={onSelect}
          style={{ marginBottom: 0 }}
        />
      </RNView>
    </RNView>
  );
}

interface TierFeatureProps {
  children: React.ReactNode;
  textColor: string;
}

Tier.Feature = function TierFeature({ children, textColor }: TierFeatureProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    featureItem: {
      flexDirection: "row",
      marginBottom: theme.margin.sm,
      alignItems: "center",
      gap: 6,
    },
    featureText: {
      color: textColor,
    },
  });

  return (
    <RNView style={styles.featureItem}>
      <AntDesign name="check" color={theme.colors.success} />
      <Text size="sm" style={styles.featureText}>
        {children}
      </Text>
    </RNView>
  );
};

Tier.Comparison = function TierComparison({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 9,
    },
  });

  return <RNView style={[styles.container, style]}>{children}</RNView>;
};

export default Tier;
