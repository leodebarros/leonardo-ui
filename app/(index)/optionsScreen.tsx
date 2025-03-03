import { useState } from "react";
import { ImageSourcePropType } from "react-native";

import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";
import { Options } from "@/components/leonardoUI/Options";
import { SwitchType } from "@/components/leonardoUI/Switch";

import { OPTIONS_VARIANTS } from "@/data/components";

export default function OptionsScreen() {
  const [selectedOption, setSelectedOption] = useState<string>("Value 1");
  const [switchValues, setSwitchValues] = useState<{ [key: string]: boolean }>({
    "1": true,
    "2": false,
    "3": true,
  });

  const handleSwitchToggle = (label: string, newValue: boolean) => {
    setSwitchValues((prev) => ({
      ...prev,
      [label]: newValue,
    }));
  };

  return (
    <MainView>
      <Header
        title="Options"
        description="A grouped set of selectable items or settings, often used in preference panels or configuration menus."
        navBack
      />

      {OPTIONS_VARIANTS.map((variant, sectionIndex) => (
        <Options key={sectionIndex} sectionTitle={variant.sectionTitle}>
          {variant.items.map((item, itemIndex) => {
            if (item.isSelect) {
              return (
                <Options.Select
                  key={itemIndex}
                  label={selectedOption}
                  iconName={item.iconName}
                  options={item.options ?? []}
                  selectedValue={selectedOption}
                  onChange={(value) => setSelectedOption(value)}
                />
              );
            } else if (item.isSwitch) {
              return (
                <Options.Switch
                  key={item.id}
                  label={item.label ?? ""}
                  description={item.description}
                  iconName={item.iconName}
                  value={item.id ? switchValues[item.id] : false}
                  type={item.switchType as SwitchType}
                  onValueChange={(newValue) =>
                    handleSwitchToggle(item.id ?? "", newValue)
                  }
                />
              );
            } else {
              return (
                <Options.Item
                  key={itemIndex}
                  label={item.label ?? ""}
                  description={item.description}
                  avatar={item.avatar as ImageSourcePropType}
                  actionIcon={item.actionIcon}
                  iconName={item.iconName}
                />
              );
            }
          })}
        </Options>
      ))}
    </MainView>
  );
}
