import { View as RNView } from "react-native";

import Header from "@/components/leonardoUI/Header";
import List from "@/components/leonardoUI/List";
import MainView from "@/components/leonardoUI/MainView";

import { LIST_VARIANTS } from "@/data/components";

export default function ListScreen() {
  return (
    <MainView>
      <Header
        title="List"
        description="A structured, collection of items, commonly used for menus, settings, or displaying dynamic data."
        navBack
      />
      <RNView style={{ gap: 18 }}>
        {LIST_VARIANTS.map(({ title, description, items }, index) => (
          <List key={index}>
            <List.Title>{title}</List.Title>
            <List.Description>{description}</List.Description>
            {items.map((item, index) => (
              <List.Item key={index} {...item} />
            ))}
          </List>
        ))}
      </RNView>
    </MainView>
  );
}
