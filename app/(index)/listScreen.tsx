import Header from "@/components/leonardoUI/Header";
import List from "@/components/leonardoUI/List";
import { View } from "@/components/leonardoUI/View";
import { View as DefaultView } from "react-native";
import { Text } from "@/components/leonardoUI/Text";

const tsLogo = require("@/assets/avatars/ts.png");

export default function ListScreen() {
  return (
    <View>
      <Header title="List" description="Display row items in a list" navBack />
      <DefaultView style={{ gap: 21 }}>
        <List>
          <List.Title>List with Values</List.Title>
          <List.Description>List Description</List.Description>
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
          />
        </List>
        <List>
          <List.Title>List with Values and Avatars</List.Title>
          <List.Description>List Description</List.Description>
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            avatar={tsLogo}
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            avatar={tsLogo}
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            avatar={tsLogo}
          />
        </List>
        <List>
          <List.Title>List with Values and Nav Arrows</List.Title>
          <List.Description>List Description</List.Description>
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            showNavArrow
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            showNavArrow
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            value="Value"
            showNavArrow
          />
        </List>
        <List>
          <List.Title>List with Nav Arrows</List.Title>
          <List.Description>List Description</List.Description>
          <List.Item
            caption="Item Caption"
            description="Item Description"
            showNavArrow
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            showNavArrow
          />
          <List.Item
            caption="Item Caption"
            description="Item Description"
            showNavArrow
          />
        </List>
      </DefaultView>
    </View>
  );
}
