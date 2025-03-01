import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { Text } from "@/components/leonardoUI/Text";
import Tabs, { TabType } from "@/components/leonardoUI/Tabs";
import { View as RNView, StyleSheet } from "react-native";
import { TABS_VARIANTS } from "@/data/components";
import { useTheme } from "@/store/themeContext";

export default function TabScreen() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    variantTitle: {
      marginBottom: theme.margin.sm,
    },
    variantDescription: {
      marginBottom: theme.margin.md,
    },
    contentContainer: {
      padding: theme.padding.md,
    },
  });

  return (
    <View>
      <Header
        title="Tabs"
        description="A navigational component that organizes content into multiple panels, each accessed by a tab."
        navBack
      />

      <RNView style={{ gap: 24 }}>
        {TABS_VARIANTS.map(({ title, description, type }) => (
          <RNView key={type}>
            <Text size="md" weight="bold" style={styles.variantTitle}>
              {title}
            </Text>
            <Text color="textSecondary" style={styles.variantDescription}>
              {description}
            </Text>

            <Tabs type={type as TabType} size="base" defaultActiveTab="tab1">
              <Tabs.Tab id="tab1" label="First Tab" />
              <Tabs.Tab id="tab2" label="Second Tab" />
              <Tabs.Tab id="tab3" label="Third Tab" />
            </Tabs>
          </RNView>
        ))}
      </RNView>
    </View>
  );
}
