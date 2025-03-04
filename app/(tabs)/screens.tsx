import List from "@/components/leonardoUI/List";
import Header from "@/components/leonardoUI/Header";
import { Href, Link } from "expo-router";
import { SCREENS } from "@/data/components";
import MainView from "@/components/leonardoUI/MainView";

export default function ScreensScreen() {
  return (
    <MainView>
      <Header title="Screens" description="A set of ready-to-go screens" />
      <List>
        {SCREENS.map(({ path, caption, description, avatar }) => (
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
      </List>
    </MainView>
  );
}
