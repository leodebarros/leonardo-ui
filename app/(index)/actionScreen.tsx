import { Action } from "@/components/leonardoUI/Action";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { View as DefaultView, StyleSheet } from "react-native";
import { useTheme } from "@/components/leonardoUI/Theme";
import { Text } from "@/components/leonardoUI/Text";

export default function ActionScreen() {
  const theme = useTheme();

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
    <View>
      <Header
        title="Action"
        description="Iconized buttons to trigger actions "
        navBack
      />
      <Card>
        <Card.Title>Plus</Card.Title>
        <Card.Description>iconName: plus</Card.Description>
        <DefaultView style={styles.iconsArea}>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="plus" type="primary" />
            <Text size="sm" color="textSecondary">
              Primary
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="plus" type="default" />
            <Text size="sm" color="textSecondary">
              Default
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="plus" type="accent" />
            <Text size="sm" color="textSecondary">
              Accent
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="plus" type="ghost" />
            <Text size="sm" color="textSecondary">
              Ghost
            </Text>
          </DefaultView>
        </DefaultView>
      </Card>
      <Card>
        <Card.Title>Ellipsis</Card.Title>
        <Card.Description>iconName: ellipsis1</Card.Description>
        <DefaultView style={styles.iconsArea}>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="ellipsis1" type="primary" />
            <Text size="sm" color="textSecondary">
              Primary
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="ellipsis1" type="default" />
            <Text size="sm" color="textSecondary">
              Default
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="ellipsis1" type="accent" />
            <Text size="sm" color="textSecondary">
              Accent
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="ellipsis1" type="ghost" />
            <Text size="sm" color="textSecondary">
              Ghost
            </Text>
          </DefaultView>
        </DefaultView>
      </Card>
      <Card>
        <Card.Title>Add File</Card.Title>
        <Card.Description>iconName: addfile</Card.Description>
        <DefaultView style={styles.iconsArea}>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="addfile" type="primary" />
            <Text size="sm" color="textSecondary">
              Primary
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="addfile" type="default" />
            <Text size="sm" color="textSecondary">
              Default
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="addfile" type="accent" />
            <Text size="sm" color="textSecondary">
              Accent
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="addfile" type="ghost" />
            <Text size="sm" color="textSecondary">
              Ghost
            </Text>
          </DefaultView>
        </DefaultView>
      </Card>
      <Card>
        <Card.Title>Copy</Card.Title>
        <Card.Description>iconName: copy1</Card.Description>
        <DefaultView style={styles.iconsArea}>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="copy1" type="primary" />
            <Text size="sm" color="textSecondary">
              Primary
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="copy1" type="default" />
            <Text size="sm" color="textSecondary">
              Default
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="copy1" type="accent" />
            <Text size="sm" color="textSecondary">
              Accent
            </Text>
          </DefaultView>
          <DefaultView style={styles.featuredIcon}>
            <Action iconName="copy1" type="ghost" />
            <Text size="sm" color="textSecondary">
              Ghost
            </Text>
          </DefaultView>
        </DefaultView>
      </Card>
    </View>
  );
}
