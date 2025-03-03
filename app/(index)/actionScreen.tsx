import { Action } from "@/components/leonardoUI/Action";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { View as DefaultView, StyleSheet } from "react-native";
import { useTheme } from "@/components/leonardoUI/Theme";
import { Text } from "@/components/leonardoUI/Text";
import { ACTION_VARIANTS } from "@/data/components";
import { ActionType } from "@/components/leonardoUI/Action";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "@/components/leonardoUI/Button";
import { Link } from "expo-router";

export default function ActionScreen() {
  const theme = useTheme();

  const ACTION_TYPES = ["primary", "default", "accent", "ghost"];

  const styles = StyleSheet.create({
    iconsArea: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      justifyContent: "space-around",
      marginTop: theme.margin.md,
    },
    featuredIcon: {
      gap: 6,
      alignItems: "center",
    },
  });

  return (
    <MainView>
      <Header
        title="Action"
        description="A compact, interactive button with an icon, used for quick actions such as sharing, saving, or liking."
        navBack
      />

      {ACTION_VARIANTS.map(({ title, description, iconName }) => (
        <Card key={iconName}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <DefaultView style={styles.iconsArea}>
            {ACTION_TYPES.map((type) => (
              <DefaultView
                key={`${iconName}-${type}`}
                style={styles.featuredIcon}
              >
                <Action
                  iconName={iconName as keyof typeof AntDesign.glyphMap}
                  type={type as ActionType}
                />
                <Text size="sm" color="textSecondary">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Text>
              </DefaultView>
            ))}
          </DefaultView>
        </Card>
      ))}
      <Card>
        <Card.Title>Customize Your Action</Card.Title>
        <Card.Description>
          Need a different action? Easily customize your own using **AntDesign**
          icons or any other library.
        </Card.Description>
        <Card.Description>
          Explore all available **AntDesign** icons at:
          <Text weight="semibold"> https://icons.expo.fyi/Index</Text>
        </Card.Description>
        <Card.Description>
          Want to use a different icon library? Simply update the **iconName**
          prop in **Action.tsx** and type it accordingly.
        </Card.Description>
        <Link href={"https://icons.expo.fyi/Index"} asChild>
          <Button caption="Browse Expo Icons" />
        </Link>
      </Card>
    </MainView>
  );
}
