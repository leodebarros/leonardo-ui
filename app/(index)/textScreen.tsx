import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { FontWeight, Text, TextSize } from "@/components/leonardoUI/Text";
import { View } from "@/components/leonardoUI/View";
import { ScrollView, StyleSheet } from "react-native";
import { TEXT_VARIANTS } from "@/data/components";
import { useState } from "react";
import Filter from "@/components/leonardoUI/Filter";
import { useTheme } from "@/store/themeContext";

export default function TextScreen() {
  const theme = useTheme();
  const filterOptions = [
    { label: "normal" },
    { label: "semibold" },
    { label: "bold" },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("normal");

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingVertical: theme.padding.sm,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <View>
      <Header
        title="Text"
        description="A configurable component for displaying and styling text consistently throughout the app."
        navBack
      />
      <Text color="textSidebar" weight="semibold">
        Font Weight
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {filterOptions.map((option) => (
          <Filter
            key={option.label}
            type="default"
            label={option.label}
            isActive={option.label === activeFilter}
            onPress={() => setActiveFilter(option.label)}
          />
        ))}
      </ScrollView>

      {TEXT_VARIANTS.map(({ size }, index) => (
        <Card key={index}>
          <Card.Title>{size}</Card.Title>
          <Card.Description>{activeFilter}</Card.Description>
          <Text size={size as TextSize} weight={activeFilter as FontWeight}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </Card>
      ))}
    </View>
  );
}
