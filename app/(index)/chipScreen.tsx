import { useState } from "react";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@/store/themeContext";
import MainView from "@/components/leonardoUI/MainView";
import Chip, { ChipType } from "@/components/leonardoUI/Chip";
import { CHIP_VARIANTS } from "@/data/components";

const FILTER_OPTIONS = [
  { label: "All" },
  { label: "Active" },
  { label: "Draft" },
  { label: "Archived" },
];

export default function ChipScreen() {
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const styles = StyleSheet.create({
    card: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.textPrimary,
    },
    scrollContainer: {
      paddingVertical: 10,
    },
  });

  return (
    <MainView>
      <Header
        title="Chip"
        description="A pill-shaped control used to filter or refine visible content, often displayed horizontally for quick selection."
        navBack
      />

      {CHIP_VARIANTS.map((variant) => (
        <Card key={variant.type} style={styles.card}>
          <Card.Title>{variant.title}</Card.Title>
          <Card.Description>{variant.description}</Card.Description>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            {FILTER_OPTIONS.map((option) => (
              <Chip
                key={option.label}
                type={
                  variant.type === "default"
                    ? undefined
                    : (variant.type as ChipType)
                }
                label={option.label}
                isActive={option.label === activeFilter}
                onPress={() => setActiveFilter(option.label)}
              />
            ))}
          </ScrollView>
        </Card>
      ))}
    </MainView>
  );
}
