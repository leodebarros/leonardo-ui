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
        title={`Components (${COMPONENTS.length})`}
        description="Check out our curated list of components"
      />
      <List>
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
            style={{ marginBottom: 0 }}
          />
        </Link>
      </List>
    </MainView>
  );
}
