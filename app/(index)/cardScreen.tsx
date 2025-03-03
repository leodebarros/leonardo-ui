import { View as DefaultView } from "react-native";
import { Button, ButtonType } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { ChipTone } from "@/components/leonardoUI/Chip";
import MainView from "@/components/leonardoUI/MainView";

import { CARD_VARIANTS } from "@/data/components";

export default function CardScreen() {
  return (
    <MainView>
      <Header
        title="Card"
        description="A versatile container that groups related content and actions, often used for displaying previews or summaries."
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
    </MainView>
  );
}
