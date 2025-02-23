import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";

export default function ChipScreen() {
  return (
    <View>
      <Header
        title="Chip"
        description="Emphasize states or other type of info"
        navBack
      />
      <Card>
        <Card.Title>Green</Card.Title>
        <Card.Description>Uses Tailwind's Green degrees</Card.Description>
        <Chip caption="Best price" tone="green" />
      </Card>
      <Card>
        <Card.Title>Red</Card.Title>
        <Card.Description>Uses Tailwind's Red degrees</Card.Description>
        <Chip caption="Sold out" tone="red" />
      </Card>
      <Card>
        <Card.Title>Yellow</Card.Title>
        <Card.Description>Uses Tailwind's Yellow degrees</Card.Description>
        <Chip caption="Boarding now" tone="yellow" />
      </Card>
      <Card>
        <Card.Title>Cyan</Card.Title>
        <Card.Description>Uses Tailwind's Cyan degrees</Card.Description>
        <Chip caption="Waiting for approval" tone="cyan" />
      </Card>
      <Card>
        <Card.Title>Purple</Card.Title>
        <Card.Description>Uses Tailwind's Purple degrees</Card.Description>
        <Chip caption="In review" tone="purple" />
      </Card>
      <Card>
        <Card.Title>Neutral</Card.Title>
        <Card.Description>Uses Tailwind's Neutral degrees</Card.Description>
        <Chip caption="Pending" tone="neutral" />
      </Card>
      <Card>
        <Card.Title>Create your own</Card.Title>
        <Card.Description>
          Don't see the color you are looking for or just want to play around
          with these chips?
        </Card.Description>
        <Card.Description>
          Just head to Chip.tsx and add another tone to the switch using
          Tailwind's colors.
        </Card.Description>
        <Card.Description>
          Pick any color you want and use its tones in the following way: 100 as
          backgroundColor, 200 as borderColor and 900 as textColor.
        </Card.Description>
        <Button caption="Open Tailwind's Colors Page" />
      </Card>
    </View>
  );
}
