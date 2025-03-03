import React from "react";
import { View as RNView, ScrollView } from "react-native";
import Tier from "@/components/leonardoUI/Tier";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";
import { Text } from "@/components/leonardoUI/Text";

import { TIER_VARIANTS } from "@/data/components";
import { useTheme } from "@/store/themeContext";

export default function TierScreen() {
  const theme = useTheme();
  return (
    <MainView>
      <Header
        title="Tier"
        description="A component for subscription plan cards."
        navBack
      />
      <RNView style={{ gap: 15 }}>
        {TIER_VARIANTS.map(({ title, description, items }, index) => (
          <RNView key={index} style={{ gap: 16 }}>
            {index === 2 ? (
              <RNView style={{ marginTop: theme.margin.xl }}>
                <Text size="md" weight="bold">
                  {title}
                </Text>
                <Text color="textSecondary">{description}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Tier.Comparison style={{ padding: 16 }}>
                    {items.map((item, itemIndex) => (
                      <Tier key={itemIndex} {...item} style={{ width: 280 }} />
                    ))}
                  </Tier.Comparison>
                </ScrollView>
              </RNView>
            ) : (
              <RNView style={{ gap: 15 }}>
                {items.map((item, itemIndex) => (
                  <Tier key={itemIndex} {...item} />
                ))}
              </RNView>
            )}
          </RNView>
        ))}
      </RNView>
    </MainView>
  );
}
