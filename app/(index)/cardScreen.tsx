import { View as DefaultView } from "react-native";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";

const coverImage = require("@/assets/covers/aspect-ratio.png");

export default function CardScreen() {
  return (
    <View>
      <Header
        title="Card"
        description="Showcase structured content with flexible layouts"
        navBack
      />
      <DefaultView style={{ gap: 12 }}>
        <Card cover={coverImage}>
          <Card.Title>Card with Cover and Footer</Card.Title>
          <Card.Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Card.Description>
          <Card.Footer
            text="Footer text"
            button={<Button caption="Action Button" type="primary" />}
          />
        </Card>

        <Card>
          <Card.Title>Card with Action Button and Footer Text</Card.Title>
          <Card.Description>
            Discover the best live performances in the heart of the city. Enjoy
            an unforgettable night with top-tier artists and immersive sound.
          </Card.Description>
          <Card.Footer
            text="Footer text"
            button={<Button caption="Action Button" type="primary" />}
          />
        </Card>

        <Card>
          <Card.Title>Card with Action Button and Chip</Card.Title>
          <Card.Description>
            Your next boarding pass is ready. Make sure to check-in on time and
            review your flight details before departure.
          </Card.Description>
          <Card.Footer
            button={<Button caption="Action Button" type="primary" />}
            text="Footer Chip"
            chipTone="yellow"
          />
        </Card>

        <Card>
          <Card.Title>Card with Action Button</Card.Title>
          <Card.Description>
            Explore breathtaking locations recently added to our collection.
            Plan your next trip and uncover hidden gems worldwide.
          </Card.Description>
          <Card.Footer
            button={<Button caption="Action Button" type="primary" />}
          />
        </Card>

        <Card>
          <Card.Title>Card with just Title and Description</Card.Title>
          <Card.Description>
            A clean and minimal card layout to display information in a
            structured and visually appealing way.
          </Card.Description>
        </Card>
      </DefaultView>
    </View>
  );
}
