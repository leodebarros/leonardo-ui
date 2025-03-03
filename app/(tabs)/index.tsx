import List from "@/components/leonardoUI/List";
import Header from "@/components/leonardoUI/Header";
import { Href, Link } from "expo-router";
import { Button } from "@/components/leonardoUI/Button";
import { COMPONENTS } from "@/data/components";
import MainView from "@/components/leonardoUI/MainView";

export default function HomeScreen() {
  return (
    <MainView>
      <Header
        title="LeonardoUI"
        description="An open-source UI components project for Expo"
      />
      <List>
        <List.Title>Components ({COMPONENTS.length})</List.Title>
        <List.Description>
          Check out our curated list of components
        </List.Description>

        {COMPONENTS.map(({ path, caption, description, avatar }) => (
          <Link key={path} href={path as Href} asChild>
            <List.Item
              caption={caption}
              description={description}
              avatar={avatar}
              primaryBgAvatar
              showNavArrow
            />
          </Link>
        ))}

        <Link href={"/(tabs)/showcase"} asChild>
          <Button
            caption="View Showcase"
            type="default"
            style={{ marginTop: 20 }}
          />
        </Link>
      </List>
    </MainView>
  );
}
