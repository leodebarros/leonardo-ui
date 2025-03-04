import React, { useState } from "react";
import { View as RNView, ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@/store/themeContext";

import Progress from "@/components/leonardoUI/Progress";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";
import Chip from "@/components/leonardoUI/Chip";
import { ProgressType } from "@/components/leonardoUI/Progress";
import Card from "@/components/leonardoUI/Card";

import { PROGRESS_VARIANTS } from "@/data/components";

export default function ProgressScreen() {
  const theme = useTheme();
  const [activeType, setActiveType] = useState<ProgressType>("default");

  const typeOptions: { label: string; value: ProgressType }[] = [
    { label: "Default", value: "default" },
    { label: "Primary", value: "primary" },
    { label: "Success", value: "success" },
    { label: "Warning", value: "warning" },
  ];

  const styles = StyleSheet.create({
    filterContainer: {
      paddingVertical: theme.padding.sm,
      marginBottom: theme.margin.md,
    },
    outlinedCard: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.antiOverBackground,
    },
    progressVariants: {
      marginTop: theme.margin.md,
      gap: 24,
    },
    circularContainer: {
      marginTop: theme.margin.md,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      gap: 20,
    },
  });

  return (
    <MainView>
      <Header
        title="Progress"
        description="Visual indicators for tracking completion and loading status."
        navBack
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {typeOptions.map((option) => (
          <Chip
            key={option.label}
            type="default"
            label={option.label}
            isActive={option.value === activeType}
            onPress={() => setActiveType(option.value)}
          />
        ))}
      </ScrollView>

      <ScrollView>
        <RNView>
          {PROGRESS_VARIANTS.map((variant, index) => (
            <Card key={index} style={styles.outlinedCard}>
              <Card.Title>{variant.title}</Card.Title>
              <Card.Description>{variant.description}</Card.Description>

              <RNView
                style={
                  variant.componentName === "Linear"
                    ? styles.progressVariants
                    : styles.circularContainer
                }
              >
                {variant.items.map((item, itemIndex) => {
                  if (variant.componentName === "Linear") {
                    return (
                      <Progress.Linear
                        key={itemIndex}
                        value={item.value}
                        label={item.label}
                        showValue={item.showValue}
                        size={item.size as "sm" | "md" | "lg"}
                        type={activeType}
                      />
                    );
                  } else {
                    return (
                      <Progress.Circular
                        key={itemIndex}
                        value={item.value}
                        label={item.label}
                        type={activeType}
                        size={item.size as number}
                        thickness={item.thickness}
                      />
                    );
                  }
                })}
              </RNView>
            </Card>
          ))}
        </RNView>
      </ScrollView>
    </MainView>
  );
}
