import { View as DefaultView } from "react-native";
import { Button, ButtonType } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import { ChipTone } from "@/components/leonardoUI/Chip";

import { CARD_VARIANTS } from "@/data/components";

export default function CardScreen() {
  return (
    <View>
      <Header
        title="Card"
        description="Showcase structured content with flexible layouts"
        navBack
      />
      <DefaultView style={{ gap: 12 }}>
        {CARD_VARIANTS.map(({ title, description, cover, footer }, index) => (
          <Card key={index} cover={cover ? cover : null}>
            <Card.Title>{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
            {footer && (
              <Card.Footer
                text={footer?.text}
                button={
                  <Button
                    caption={footer?.button.caption!}
                    type={footer?.button.type as ButtonType}
                  />
                }
                chipTone={footer.chipTone as ChipTone}
              />
            )}
          </Card>
        ))}
      </DefaultView>
    </View>
  );
}
