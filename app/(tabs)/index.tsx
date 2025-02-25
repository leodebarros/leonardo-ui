import { View } from "@/components/leonardoUI/View";
import List from "@/components/leonardoUI/List";
import Header from "@/components/leonardoUI/Header";
import { Href, Link } from "expo-router";
import { Button } from "@/components/leonardoUI/Button";
import { COMPONENTS } from "@/data/components";

export default function HomeScreen() {
  return (
    <View>
      <Header
        title="LeonardoUI"
        description="An open-source UI components project for Expo"
      />
      <List>
        <List.Title>Components</List.Title>
        <List.Description>
          Check out our curated list of components
        </List.Description>

        {COMPONENTS.map(({ path, caption }) => (
          <Link key={path} href={path as Href} asChild>
            <List.Item caption={caption} showNavArrow />
          </Link>
        ))}

        <Link href={"/(tabs)/examples"} asChild>
          <Button
            caption="View Examples"
            type="primary"
            style={{ marginTop: 20 }}
          />
        </Link>
      </List>
    </View>
  );
}
