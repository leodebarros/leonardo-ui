import { View as DefaultView, ScrollView, StyleSheet } from "react-native";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import Dialog from "@/components/leonardoUI/Dialog";
import { useState } from "react";
import Toast from "@/components/leonardoUI/Toast";
import Filter from "@/components/leonardoUI/Filter";
import List from "@/components/leonardoUI/List";
import { Action } from "@/components/leonardoUI/Action";
import { Text } from "@/components/leonardoUI/Text";

const coverImage = require("@/assets/covers/street-music.jpg");

export default function PlaygroundScreen() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const filterOptions = [
    { label: "All" },
    { label: "Card" },
    { label: "List" },
    { label: "Pending" },
    { label: "Assigned" },
    { label: "In Progress" },
    { label: "Completed" },
  ];

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingVertical: 10,
    },
    contentContainer: {
      paddingLeft: 10,
      paddingRight: 20,
    },
  });

  return (
    <View>
      <Header
        title="Examples"
        description="See our amazing components in action"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {filterOptions.map((option) => (
          <Filter
            key={option.label}
            label={option.label}
            isActive={option.label === activeFilter}
            onPress={() => setActiveFilter(option.label)}
          />
        ))}
      </ScrollView>
      <DefaultView style={{ gap: 12 }}>
        <Card cover={coverImage}>
          <Card.Title>Card with primary button</Card.Title>
          <Card.Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Card.Description>
          <Card.Footer
            text="London, UK"
            button={
              <Button
                caption="Trigger toast"
                type="primary"
                onPress={() => setShowToast(true)}
              />
            }
          />
        </Card>
        <Toast
          isVisible={showToast}
          onRequestClose={() => setShowToast(false)}
          title="Money sent!"
          description="BTC 0.91871 were sent to Donald Trump"
          type="success"
          linkCaption="Open blockchain explorer"
          linkRoute="/"
        />
        <Card>
          <Card.Title>Card with default button</Card.Title>
          <Card.Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Card.Description>
          <Card.Footer
            text="Boarding"
            button={
              <Button
                caption="Open dialog"
                type="default"
                onPress={() => setShowDialog(true)}
              />
            }
            chipTone="yellow"
          />
          <Dialog
            isVisible={showDialog}
            onCancel={() => setShowDialog(false)}
          />
        </Card>
        <Card>
          <Card.Title>Recently added</Card.Title>
          <Card.Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Card.Description>
          <Card.Footer button={<Button caption="Book now" type="primary" />} />
        </Card>
        <Card>
          <Card.Title>Recently added</Card.Title>
          <Card.Description>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident
          </Card.Description>
        </Card>
      </DefaultView>
      <DefaultView>
        <DefaultView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 12,
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
            description="Display sdetailed information"
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
    </View>
  );
}
