import { View as RNView, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "./Theme";
import { useRouter } from "expo-router";
import { Text } from "./Text";

interface HeaderProps {
  title: string;
  description?: string;
  navBack?: boolean;
}

export default function Header({
  title,
  description,
  navBack = false,
}: HeaderProps) {
  const theme = useTheme();
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      maxWidth: "100%",
      gap: 3,
      marginTop: navBack ? 0 : theme.margin.lg,
      marginBottom: theme.margin.xs,
    },
    description: {
      marginBottom: theme.margin.md,
    },
  });

  return (
    <RNView style={styles.container}>
      {navBack && (
        <Pressable onPress={handleBackPress}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={theme.colors.textPrimary}
          />
        </Pressable>
      )}
      <Text size="xl" weight="bold">
        {title}
      </Text>
      {description && (
        <RNView>
          <Text color="textSecondary" style={styles.description}>
            {description}
          </Text>
        </RNView>
      )}
    </RNView>
  );
}
