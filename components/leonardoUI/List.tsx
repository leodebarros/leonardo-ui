import * as React from "react";
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useTheme } from "./Theme";
import { Entypo } from "@expo/vector-icons";
import { forwardRef } from "react";
import { useThemeActions } from "@/store/themeContext";
import { Text } from "./Text";

interface ListProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  padding?: "md" | "lg";
}

function List({ children, style, padding = "lg" }: ListProps) {
  const theme = useTheme();
  const paddingValue = theme.padding[padding];

  const styles = StyleSheet.create({
    list: {
      minWidth: "100%",
      maxWidth: "100%",
      marginBottom: theme.margin.md,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: paddingValue,
    },
  });

  return <View style={[styles.list, style]}>{children}</View>;
}

/* ------------------------------------------------------------------
   2. Title sub-component
   ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------
   3. Description sub-component
   ------------------------------------------------------------------ */
List.Description = function ListDescription({
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
      marginBottom: theme.margin.lg,
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

/* ------------------------------------------------------------------
   4. Item sub-component
   ------------------------------------------------------------------ */
interface ListItemProps {
  caption: string;
  description?: string;
  value?: string;
  avatar?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

List.Item = forwardRef<View, ListItemProps>(function ListItem(
  { caption, description, value, avatar, onPress },
  ref
) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.margin.lg,
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 1,
    },
    avatarPlaceholder: {
      width: 32,
      height: 32,
      borderRadius: 16,
      marginRight: theme.margin.sm,
      backgroundColor: theme.colors.border,
      justifyContent: "center",
      alignItems: "center",
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
    <TouchableOpacity ref={ref} style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftSection}>
        {typeof avatar === "string" && (
          <View style={styles.avatarPlaceholder}>
            {/* e.g. <Text style={{ color: '#fff' }}>A</Text> */}
          </View>
        )}

        <View style={styles.textContainer}>
          <Text weight="semibold" numberOfLines={1}>
            {caption}
          </Text>
          {description && (
            <Text size="sm" color="textSecondary" numberOfLines={1}>
              {description}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.rightSection}>
        {value ? (
          <Text weight="semibold" numberOfLines={1}>
            {value}
          </Text>
        ) : (
          <Entypo name="chevron-right" size={30} color={chosenPrimaryKey} />
        )}
      </View>
    </TouchableOpacity>
  );
});

export default List;
