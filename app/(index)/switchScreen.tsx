import React, { useState } from "react";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import Card from "@/components/leonardoUI/Card";
import { Switch, SwitchType } from "@/components/leonardoUI/Switch";
import { useTheme } from "@/store/themeContext";
import { SWITCH_VARIANTS } from "@/data/components";

export default function SwitchScreen() {
  const theme = useTheme();

  const [switchStates, setSwitchStates] = useState<Record<SwitchType, boolean>>(
    {
      default: false,
      primary: true,
      ghost: false,
    }
  );

  const handleChange = (key: SwitchType, val: boolean) => {
    setSwitchStates((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <View>
      <Header
        title="Switch"
        description="A toggle-like component for switching between two states, e.g., on/off or enable/disable."
        navBack
      />

      {SWITCH_VARIANTS.map(({ key, title, description }) => (
        <Card
          key={key}
          style={{
            borderColor: theme.colors.textSidebar,
            borderWidth: 1,
            backgroundColor: "transparent",
            marginBottom: theme.margin.md,
          }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Switch
            label="Label"
            type={key}
            value={switchStates[key]}
            onValueChange={(val) => handleChange(key, val)}
          />
        </Card>
      ))}
    </View>
  );
}
