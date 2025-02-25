import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";
import { CHIP_VARIANTS } from "@/data/components";
import { Link } from "expo-router";

export default function ChipScreen() {
  return (
    <View>
      <Header
        title="Chip"
        description="A small, interactive UI element used to display information, filter content, or represent choices in a compact way."
        navBack
      />

      {CHIP_VARIANTS.map(({ title, description, caption, tone }) => (
        <Card key={tone}>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Chip caption={caption} tone={tone as any} />
        </Card>
      ))}

      <Card>
        <Card.Title>Create Your Own</Card.Title>
        <Card.Description>
          Don't see the color you need? Customize your own Chip using Tailwind's
          color palette.
        </Card.Description>
        <Card.Description>
          Modify Chip.tsx and add a new tone by specifying Tailwind's colors.
        </Card.Description>
        <Card.Description>
          Use the following structure: **100** for background, **200** for
          border, and **900** for text color.
        </Card.Description>
        <Link href={"https://tailwindcss.com/docs/colors"} asChild>
          <Button caption="Open Tailwind's Colors Page" />
        </Link>
      </Card>
    </View>
  );
}
