import { useState } from "react";
import Card from "@/components/leonardoUI/Card";
import Filter from "@/components/leonardoUI/Filter";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@/store/themeContext";

export default function FilterScreen() {
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
    <View>
      <Header
        title="Filter"
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
        <Card.Title>Default Filters</Card.Title>
        <Card.Description>type: default</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Filter
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
        <Card.Title>Primary Filters</Card.Title>
        <Card.Description>type: primary</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Filter
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
        <Card.Title>Ghost Filters</Card.Title>
        <Card.Description>type: ghost</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Filter
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
        <Card.Title>Outline Filters</Card.Title>
        <Card.Description>type: outline</Card.Description>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {filterOptions.map((option) => (
            <Filter
              key={option.label}
              type="outline"
              label={option.label}
              isActive={option.label === activeFilter}
              onPress={() => setActiveFilter(option.label)}
            />
          ))}
        </ScrollView>
      </Card>
    </View>
  );
}
