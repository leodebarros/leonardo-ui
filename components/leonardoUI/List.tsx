import * as React from "react";
import {
  StyleSheet,
  View as RNView,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "./Theme";
import { Entypo } from "@expo/vector-icons";
import { createContext, forwardRef, useContext, useState } from "react";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

interface ListProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: "md" | "lg";
}

const ListContext = createContext({ hasHeader: false });

function List({ children, style, padding = "lg" }: ListProps) {
  const theme = useTheme();
  const paddingValue = theme.padding[padding];

  const hasHeader = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === List.Title || child.type === List.Description)
  );

  const styles = StyleSheet.create({
    list: {
      minWidth: "100%",
      maxWidth: "100%",
      marginBottom: theme.margin.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: paddingValue,
      gap: hasHeader ? 0 : 20,
    },
  });

  return (
    <ListContext.Provider value={{ hasHeader }}>
      <RNView style={[styles.list, style]}>{children}</RNView>
    </ListContext.Provider>
  );
}

List.Title = function ListTitle({ children }: { children: React.ReactNode }) {
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

List.Description = function ListDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Text color="textSecondary">{children}</Text>;
};

interface ListItemProps {
  caption: string;
  description?: string;
  value?: string;
  avatar?: ImageSourcePropType;
  showNavArrow?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

List.Item = forwardRef<RNView, ListItemProps>(function ListItem(
  { caption, description, value, avatar, showNavArrow, onPress, disabled },
  ref
) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const [imageError, setImageError] = useState(false);

  const { hasHeader } = useContext(ListContext);

  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: hasHeader ? theme.margin.lg : 0,
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      flexShrink: 1,
    },
    avatarImage: {
      width: 32,
      height: 32,
      marginRight: theme.margin.sm,
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.md,
      objectFit: "contain",
    },
    avatarPlaceholder: {
      width: 32,
      height: 32,
      marginRight: theme.margin.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
    },
    textContainer: {
      flexShrink: 1,
    },
    captionText: {
      fontWeight: theme.fontWeight.semibold,
    },
    descriptionText: {
      marginTop: theme.margin.xs,
    },
    rightSection: {
      marginLeft: theme.margin.sm,
      flexDirection: "row",
      alignItems: "center",
    },
    valueText: {
      fontWeight: theme.fontWeight.semibold,
    },
  });

  return (
    <TouchableOpacity
      ref={ref}
      style={styles.itemContainer}
      onPress={onPress}
      disabled={disabled}
    >
      <RNView style={styles.leftSection}>
        {avatar !== undefined && !imageError ? (
          <Image
            source={avatar}
            style={styles.avatarImage}
            resizeMode="center"
            onError={() => setImageError(true)}
          />
        ) : avatar !== undefined ? (
          <RNView style={styles.avatarPlaceholder} />
        ) : null}
        <RNView style={styles.textContainer}>
          <Text weight="semibold" numberOfLines={1}>
            {caption}
          </Text>
          {description && (
            <Text size="sm" color="textSecondary" numberOfLines={1}>
              {description}
            </Text>
          )}
        </RNView>
      </RNView>

      <RNView style={styles.rightSection}>
        {value && (
          <Text weight="semibold" numberOfLines={1}>
            {value}
          </Text>
        )}
        {showNavArrow && (
          <Entypo name="chevron-right" size={30} color={chosenPrimaryKey} />
        )}
      </RNView>
    </TouchableOpacity>
  );
});

export default List;
