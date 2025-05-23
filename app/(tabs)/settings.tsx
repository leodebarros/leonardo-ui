import React from "react";
import Header from "@/components/leonardoUI/Header";
import { PrimaryColorKey, useThemeActions } from "@/store/themeContext";
import { Options } from "@/components/leonardoUI/Options";
import { Link } from "expo-router";
import MainView from "@/components/leonardoUI/MainView";

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
    <MainView>
      <Header
        title="Settings"
        description="Customize app appearance and access information about LeonardoUI and how to contribute to the project."
      />

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
        <Link href={"https://github.com/sponsors/leodebarros"} asChild>
          <Options.Item iconName="heart" label="Become a sponsor" />
        </Link>
      </Options>
    </MainView>
  );
}
