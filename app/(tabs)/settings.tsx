import React, { useState } from "react";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import { AntDesign } from "@expo/vector-icons";
import {
  PrimaryColorKey,
  useTheme,
  useThemeActions,
} from "@/store/themeContext";
import { Options } from "@/components/leonardoUI/Options";
import { Link } from "expo-router";

const COLOR_HEX_TO_LABEL: Record<string, string> = {
  "#00B2A9": "teal",
  "#1E88E5": "blue",
  "#FF6D00": "orange",
  "#B03FCF": "purple",
  "#BA8E23": "yellow",
};

export default function SettingsScreen() {
  const { chosenPrimaryKey, setPrimaryColor } = useThemeActions();

  return (
    <View>
      <Header title="Settings" description="Configure your app settings" />

      <Options sectionTitle="Primary Color">
        <Options.Select
          label={COLOR_HEX_TO_LABEL[chosenPrimaryKey] || chosenPrimaryKey}
          iconName="skin"
          options={[
            { label: "Teal", value: "teal" },
            { label: "Purple", value: "purple" },
            { label: "Blue", value: "blue" },
            { label: "Orange", value: "orange" },
            { label: "Yellow", value: "yellow" },
          ]}
          selectedValue={COLOR_HEX_TO_LABEL[chosenPrimaryKey]}
          onChange={(value) => setPrimaryColor(value as PrimaryColorKey)}
        />
      </Options>

      <Options sectionTitle="Contributors">
        <Link href={"https://github.com/leodebarros"} asChild>
          <Options.Item
            iconName="skin"
            label="Leonardo De Barros"
            description="github: leodebarros"
            avatar={require("@/assets/avatars/leodebarros.png")}
            actionIcon="chevron-forward-outline"
          />
        </Link>
      </Options>

      <Options sectionTitle="About LeonardoUI">
        <Options.Item disabled iconName="file1" label="Docs (Coming soon)" />
        <Link href={"https://github.com/leodebarros/leonardo-ui"} asChild>
          <Options.Item iconName="github" label="View source code" />
        </Link>
      </Options>
    </View>
  );
}
