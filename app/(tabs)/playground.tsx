import { View as DefaultView, ScrollView, StyleSheet } from "react-native";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import Dialog from "@/components/leonardoUI/Dialog";
import { useState } from "react";
import Toast from "@/components/leonardoUI/Toast";
import FilterPill from "@/components/leonardoUI/FilterPill";

const coverImage = require("@/assets/covers/street-music.jpg");

export default function PlaygroundScreen() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const filterOptions = [
    { label: "All" },
    { label: "Cards" },
    { label: "Lists" },
    { label: "Pending" },
    { label: "Assigned" },
    { label: "In Progress" },
    { label: "Completed" },
  ];

  // Track which filter is active
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const styles = StyleSheet.create({
    scrollContainer: {
      // adjusts vertical spacing if desired
      paddingVertical: 10,
    },
    contentContainer: {
      // ensures pills start left-aligned
      paddingLeft: 10,
      // extra right padding if you want spacing at the end
      paddingRight: 20,
    },
  });

  return (
    <View>
      <Header title="Playground" description="Try our amazing components" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
      >
        {filterOptions.map((option) => (
          <FilterPill
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
    </View>
  );
}
