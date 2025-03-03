import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Header from "@/components/leonardoUI/Header";
import Input, { ValidationType } from "@/components/leonardoUI/Input";
import MainView from "@/components/leonardoUI/MainView";
import { useTheme } from "@/components/leonardoUI/Theme";
import { useState } from "react";
import { View as RNView, ScrollView, StyleSheet } from "react-native";

export default function InputScreen() {
  const theme = useTheme();
  const validationTypes = [
    { label: "none", value: undefined },
    { label: "info", value: "info" },
    { label: "error", value: "error" },
    { label: "success", value: "success" },
  ];

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
        {validationTypes.map((option) => (
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
        <Card>
          <Card.Title>Small Input</Card.Title>
          <Card.Description>Size: sm</Card.Description>
          <Input
            size="sm"
            label="Label"
            placeholder="Placeholder"
            validationType={validationType as ValidationType}
            validationText="Validation text"
          />
        </Card>

        <Card>
          <Card.Title>Medium Input</Card.Title>
          <Card.Description>Size: md</Card.Description>
          <Input
            label="Label"
            placeholder="Placeholder"
            validationType={validationType as ValidationType}
            validationText="Validation text"
          />
        </Card>

        <Card>
          <Card.Title>Large Input</Card.Title>
          <Card.Description>Size: lg</Card.Description>
          <Input
            size="lg"
            label="Label"
            placeholder="Placeholder"
            validationType={validationType as ValidationType}
            validationText="Validation text"
          />
        </Card>
      </RNView>
    </MainView>
  );
}
