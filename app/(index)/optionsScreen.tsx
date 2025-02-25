import Header from "@/components/leonardoUI/Header";
import { Options } from "@/components/leonardoUI/Options";
import { View } from "@/components/leonardoUI/View";
import { OPTIONS_VARIANTS } from "@/data/components";
import { useState } from "react";
import { ImageSourcePropType } from "react-native";

export default function OptionsScreen() {
  const [selectedOption, setSelectedOption] = useState("Value 1");

  return (
    <View>
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
    </View>
  );
}
