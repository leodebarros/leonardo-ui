import { useState } from "react";
import { Link } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Filter from "@/components/leonardoUI/Filter";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";
import { useTheme } from "@/store/themeContext";

import { BADGE_VARIANTS } from "@/data/components";

export default function BadgeScreen() {
  const theme = useTheme();
  const filterOptions = [{ label: "base" }, { label: "small" }];

  const [activeFilter, setActiveFilter] = useState<string>("base");

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingVertical: theme.padding.sm,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <MainView>
      <Header
        title="Badge"
        description="A small, interactive UI element used to display information, filter content, or represent choices in a compact way."
        navBack
      />
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

      {BADGE_VARIANTS.map(({ title, description, caption, tone }) => (
        <Card key={tone}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Chip
            caption={caption}
            size={activeFilter === "base" ? "base" : "sm"}
            tone={tone as any}
          />
        </Card>
      ))}

      <Card>
        <Card.Title>Create Your Own</Card.Title>
        <Card.Description>
          Don't see the color you need? Customize your own Badge using
          Tailwind's color palette.
        </Card.Description>
        <Card.Description>
          Modify Badge.tsx and add a new tone by specifying Tailwind's colors.
        </Card.Description>
        <Card.Description>
          Use the following structure: **100** for background, **200** for
          border, and **900** for text color.
        </Card.Description>
        <Link href={"https://tailwindcss.com/docs/colors"} asChild>
          <Button caption="Open Tailwind's Colors Page" />
        </Link>
      </Card>
    </MainView>
  );
}
