import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Header from "@/components/leonardoUI/Header";
import Input, { ValidationType } from "@/components/leonardoUI/Input";
import MainView from "@/components/leonardoUI/MainView";
import { useTheme } from "@/components/leonardoUI/Theme";
import { useState } from "react";
import { View as RNView, ScrollView, StyleSheet } from "react-native";

const VALIDATION_TYPES = [
  { label: "None", value: undefined },
  { label: "Info", value: "info" },
  { label: "Error", value: "error" },
  { label: "Success", value: "success" },
];

const INPUT_SIZE_VARIANTS = [
  { title: "Small Input", description: "Size: sm", size: "sm" },
  { title: "Medium Input", description: "Size: md", size: "md" },
  { title: "Large Input", description: "Size: lg", size: "lg" },
];

export default function InputScreen() {
  const theme = useTheme();
  const [validationType, setValidationType] = useState<
    ValidationType | undefined
  >(undefined);

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingVertical: theme.padding.sm,
      marginBottom: theme.margin.md,
    },
  });

  return (
    <MainView>
      <Header
        title="Input"
        description="A text field for capturing user input, supporting various validations and styles."
        navBack
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {VALIDATION_TYPES.map((option) => (
          <Chip
            key={option.label}
            type="default"
            label={option.label}
            isActive={option.value === validationType}
            onPress={() => setValidationType(option.value as ValidationType)}
          />
        ))}
      </ScrollView>
      <RNView>
        {INPUT_SIZE_VARIANTS.map((variant) => (
          <Card key={variant.size}>
            <Card.Title>{variant.title}</Card.Title>
            <Card.Description>{variant.description}</Card.Description>
            <Input
              size={variant.size as "sm" | "md" | "lg"}
              label="Label"
              placeholder="Placeholder"
              validationType={validationType as ValidationType}
              validationText="Validation text"
            />
          </Card>
        ))}
      </RNView>
    </MainView>
  );
}
