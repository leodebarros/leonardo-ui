import React from "react";
import { Text } from "react-native";
import { useTheme, useThemeActions } from "@/store/themeContext";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import { Button } from "@/components/leonardoUI/Button";

export default function SettingsScreen() {
  const theme = useTheme();
  const { chosenPrimaryKey, setPrimaryColor } = useThemeActions();

  return (
    <View>
      <Header title="Settings" description="Configure your app settings" />
      <Button caption="Teal" onPress={() => setPrimaryColor("teal")} />
      <Button caption="Blue" onPress={() => setPrimaryColor("blue")} />
      <Button caption="Orange" onPress={() => setPrimaryColor("orange")} />
      <Button caption="Purple" onPress={() => setPrimaryColor("purple")} />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: theme.fontSize.base,
        }}
      >
        This text uses the current primary color
      </Text>
    </View>
  );
}
