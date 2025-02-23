import { Action } from "@/components/leonardoUI/Action";
import { Button } from "@/components/leonardoUI/Button";
import Header from "@/components/leonardoUI/Header";
import List from "@/components/leonardoUI/List";
import { View } from "@/components/leonardoUI/View";
import { View as DefaultView } from "react-native";
import { Text } from "@/components/leonardoUI/Text";

export default function ListScreen() {
  return (
    <View>
      <Header title="List" description="Display row items in a list" navBack />
      <DefaultView style={{ gap: 21 }}>
        <List>
          <List.Title>Recent transactions</List.Title>
          <List.Description>
            Summary of transactions in February 2025
          </List.Description>
          <List.Item
            caption="Starbucks"
            description="Display detailed information"
            value="$18.13"
          />
          <List.Item
            caption="Walmart"
            description="Info helpers"
            value="$83.90"
          />
          <List.Item
            caption="Vercel"
            description="Prompt for double check"
            value="$49.99"
          />
          <List.Item
            caption="Expo"
            description="Show case a service"
            value="$14.95"
          />
          <List.Item
            caption="McDonalds"
            description="Amazing notifications"
            value="$18.99"
          />
          <Button caption="See all transactions" type="outline" />
        </List>
        <DefaultView>
          <DefaultView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <DefaultView style={{ gap: 3 }}>
              <Text weight="semibold">Recent transactions</Text>
              <Text size="sm" color="textSecondary">
                February 2025
              </Text>
            </DefaultView>
            <DefaultView style={{ flexDirection: "row", gap: 9 }}>
              <Action iconName="ellipsis1" type="accent" />
              <Action iconName="export" type="accent" />
            </DefaultView>
          </DefaultView>
          <List>
            <List.Item
              caption="Starbucks"
              description="Display detailed information"
              value="$19.98"
            />
            <List.Item
              caption="Walmart"
              description="Info helpers"
              value="$83.90"
            />
            <List.Item
              caption="Vercel"
              description="Prompt for double check"
              value="$49.99"
            />
            <List.Item
              caption="Expo"
              description="Show case a service"
              value="$14.95"
            />
            <List.Item
              caption="McDonalds"
              description="Amazing notifications"
              value="$18.99"
            />
          </List>
        </DefaultView>
      </DefaultView>
    </View>
  );
}
