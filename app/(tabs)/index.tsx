import { View } from "@/components/leonardoUI/View";
import List from "@/components/leonardoUI/List";
import Header from "@/components/leonardoUI/Header";
import { Link } from "expo-router";
import { View as DefaultView } from "react-native";
import { Button } from "@/components/leonardoUI/Button";
import { useTheme, useThemeActions } from "@/store/themeContext";

export default function HomeScreen() {
  const theme = useTheme();
  const { chosenPrimaryKey, setPrimaryColor } = useThemeActions();

  return (
    <View>
      <Header
        title="LeonardoUI"
        description="An open sourced UI components project for Expo"
      />
      <List>
        <List.Title>Components</List.Title>
        <List.Description>
          Check out our curated list of components
        </List.Description>
        <Link href={"/(index)/actionScreen"} asChild>
          <List.Item
            caption="Action"
            description="Iconized button to trigger actions"
          />
        </Link>
        <Link href={"/(index)/buttonScreen"} asChild>
          <List.Item caption="Button" description="Trigger an action" />
        </Link>
        <List.Item caption="Card" description="Display detailed information" />
        <Link href={"/(index)/chipScreen"} asChild>
          <List.Item caption="Chip" description="Info helpers" />
        </Link>
        <List.Item caption="Dialog" description="Prompt for double check" />
        <Link href={"/(index)/featuredScreen"} asChild>
          <List.Item caption="Featured" description="Show case a service" />
        </Link>
        <Link href={"/(index)/headerScreen"} asChild>
          <List.Item
            caption="Header"
            description="Screen headers with descriptions and nav back arrow"
          />
        </Link>
        <Link href={"/(index)/listScreen"} asChild>
          <List.Item caption="List" description="This one is a list" />
        </Link>
        <Link href={"/(index)/toastScreen"} asChild>
          <List.Item
            caption="Toast"
            description="Throw notifications on actions results"
          />
        </Link>
        <Link href={"/(tabs)/playground"} asChild>
          <Button caption="Go to Playground" type="primary" />
        </Link>
      </List>
    </View>
  );
}
