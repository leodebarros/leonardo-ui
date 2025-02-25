import { Button, ButtonType } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { BUTTON_VARIANTS } from "@/data/components";

export default function ButtonScreen() {
  return (
    <View>
      <Header
        title="Button"
        description="A tappable UI element that triggers an action or navigation when pressed, supporting multiple styles and states."
        navBack
      />

      {BUTTON_VARIANTS.map(({ title, description, type }) => (
        <Card key={type}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Button caption="Enabled" type={type as ButtonType} />
          <Button caption="Disabled" type={type as ButtonType} disabled />
          <Button caption="Loading" type={type as ButtonType} loading />
        </Card>
      ))}
    </View>
  );
}
