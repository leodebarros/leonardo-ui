import { useState } from "react";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@/store/themeContext";
import MainView from "@/components/leonardoUI/MainView";
import Chip from "@/components/leonardoUI/Chip";

export default function ChipScreen() {
  const theme = useTheme();
  const filterOptions = [
    { label: "All" },
    { label: "Active" },
    { label: "Draft" },
    { label: "Archived" },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const styles = StyleSheet.create({
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
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.colors.textPrimary,
        }}
      >
        <Card.Title>Default Chips</Card.Title>
        <Card.Description>type: default</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Chip
              key={option.label}
              label={option.label}
              isActive={option.label === activeFilter}
              onPress={() => setActiveFilter(option.label)}
            />
          ))}
        </ScrollView>
      </Card>
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.colors.textPrimary,
        }}
      >
        <Card.Title>Primary Chips</Card.Title>
        <Card.Description>type: primary</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Chip
              type="primary"
              key={option.label}
              label={option.label}
              isActive={option.label === activeFilter}
              onPress={() => setActiveFilter(option.label)}
            />
          ))}
        </ScrollView>
      </Card>
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.colors.textPrimary,
        }}
      >
        <Card.Title>Ghost Chips</Card.Title>
        <Card.Description>type: ghost</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Chip
              type="ghost"
              key={option.label}
              label={option.label}
              isActive={option.label === activeFilter}
              onPress={() => setActiveFilter(option.label)}
            />
          ))}
        </ScrollView>
      </Card>
      <Card
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: theme.colors.textPrimary,
        }}
      >
        <Card.Title>Outline Chips</Card.Title>
        <Card.Description>type: outline</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Chip
              key={option.label}
              type="outline"
              label={option.label}
              isActive={option.label === activeFilter}
              onPress={() => setActiveFilter(option.label)}
            />
          ))}
        </ScrollView>
      </Card>
    </MainView>
  );
}
