import React, { useState } from "react";
import { ScrollView, StyleSheet, View as RNView } from "react-native";
import { useTheme } from "@/store/themeContext";

// LeonardoUI Components
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import Filter from "@/components/leonardoUI/Filter";
import { Action } from "@/components/leonardoUI/Action";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Chip from "@/components/leonardoUI/Chip";
import Dialog from "@/components/leonardoUI/Dialog";
import Featured from "@/components/leonardoUI/Featured";
import List from "@/components/leonardoUI/List";
import { Options } from "@/components/leonardoUI/Options";
import RadioButton from "@/components/leonardoUI/RadioButton";
import { Switch } from "@/components/leonardoUI/Switch";
import Toast from "@/components/leonardoUI/Toast";
import { Text } from "@/components/leonardoUI/Text";

const filterOptions = [
  { label: "Banking" },
  { label: "Promotion" },
  { label: "Settings" },
];

export default function ShowcaseScreen() {
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = useState("Banking");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const [radioSelected, setRadioSelected] = useState("monthly");
  const [notificationsOn, setNotificationsOn] = useState(true);

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingLeft: theme.padding.sm,
      marginBottom: 15,
    },
    container: {
      paddingHorizontal: theme.padding.sm,
      paddingBottom: 60,
    },
    filterRow: {
      flexDirection: "row",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginVertical: theme.margin.md,
    },
  });

  const renderBankingShowcase = () => (
    <RNView style={{ gap: 9 }}>
      <Card>
        <Card.Title>BTC 1.9259</Card.Title>
        <Card.Description>≈ 163,903.26 USD</Card.Description>
        <Card.Footer
          text="Main Account"
          button={<Button caption="Deposit Funds" type="primary" />}
        />
      </Card>

      <List>
        <List.Title>Recent Transactions</List.Title>
        <List.Description>Tap on a transaction for details</List.Description>
        <List.Item
          caption="Starbucks Coffee"
          description="Friday morning"
          value="-4.50 USD"
        />
        <List.Item
          caption="Salary"
          description="Monthly Income"
          value="+2,000.00 USD"
        />
        <List.Item
          caption="Grocery Store"
          description="Walmart"
          value="-87.20 USD"
        />
        <Button caption="See All Transactions" type="outline" />
      </List>

      <List>
        <List.Title>Send Money Again</List.Title>
        <List.Description>Recipients recently used</List.Description>
        <List.Item
          caption="Donald Drunk"
          description="@drunkingdonut"
          avatar={require("@/assets/avatars/recipient1.png")}
          showNavArrow
        />
        <List.Item
          caption="Sara Parker"
          description="@sarap111"
          avatar={require("@/assets/avatars/recipient2.png")}
          showNavArrow
        />
        <List.Item
          caption="Michael Kors"
          description="@mkors"
          avatar={require("@/assets/avatars/recipient3.png")}
          showNavArrow
        />
      </List>
    </RNView>
  );

  const renderPromotionShowcase = () => (
    <RNView style={{ gap: 9 }}>
      <Featured
        title="Summer Sale"
        subtitle="Up to 50% off on selected items"
        buttonCaption="Explore"
        imageAddress={require("@/assets/covers/summer-sale.png")}
        tone={{
          themeColor: "rgb(112, 15, 63)",
          titleColor: "#fff0f6",
          subtitleColor: "#ffcce0",
        }}
      />

      <Card>
        <Card.Title>50% OFF Coupon</Card.Title>
        <Card.Description>
          Use this coupon to get half off your next purchase. Expires August
          31st.
        </Card.Description>
        <RNView style={styles.row}>
          <Chip caption="Limited Time" tone="red" />
          <Chip caption="One-use Only" tone="yellow" />
        </RNView>
        <Button
          type="default"
          caption="Claim Coupon"
          onPress={() => setToastVisible(true)}
        />
      </Card>

      <Toast
        isVisible={toastVisible}
        onRequestClose={() => setToastVisible(false)}
        title="Coupon Claimed!"
        description="Your discount has been added."
        type="success"
      />
    </RNView>
  );

  const renderSettingsShowcase = () => (
    <>
      <Options sectionTitle="General Preferences">
        <Options.Item
          iconName="user"
          label="Profile"
          description="Edit your personal details"
          actionIcon="chevron-forward-outline"
        />
        <Options.Item
          iconName="lock"
          label="Change Password"
          actionIcon="chevron-forward-outline"
        />
      </Options>

      <Options sectionTitle="Notifications">
        <Options.Item
          iconName="bells"
          label="Alerts"
          description="Receive push notifications"
        />
        <Options.Item
          iconName="sound"
          label="Sounds"
          description="Receive push notifications"
          actionIcon="chevron-forward-outline"
        />
      </Options>

      <Options sectionTitle="Subscription">
        <Options.Item
          iconName="bank"
          label="Billing Cycle"
          description="Select monthly or yearly"
          disabled
        />
        <RNView style={styles.row}>
          <RadioButton
            selected={radioSelected === "monthly"}
            onPress={() => setRadioSelected("monthly")}
          />
          <Text size="sm">Monthly</Text>

          <RadioButton
            selected={radioSelected === "yearly"}
            onPress={() => setRadioSelected("yearly")}
            style={{ marginLeft: 20 }}
          />
          <Text size="sm">Yearly</Text>
        </RNView>
      </Options>

      <Button
        type="destructive"
        caption="Log Out"
        onPress={() => setDialogVisible(true)}
      />

      <Dialog
        isVisible={dialogVisible}
        onCancel={() => setDialogVisible(false)}
        onConfirm={() => setDialogVisible(false)}
        onRequestClose={() => setDialogVisible(false)}
        type="primary"
      />
    </>
  );

  const renderShowcaseContent = () => {
    switch (activeFilter) {
      case "Banking":
        return renderBankingShowcase();
      case "Promotion":
        return renderPromotionShowcase();
      case "Settings":
        return renderSettingsShowcase();
      default:
        return null;
    }
  };

  return (
    <View>
      <Header
        title="Showcase"
        description="Explores real app scenarios using LeonardoUI components"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {filterOptions.map((option) => (
          <Filter
            key={option.label}
            label={option.label}
            isActive={option.label === activeFilter}
            onPress={() => setActiveFilter(option.label)}
            type="default"
          />
        ))}
      </ScrollView>

      <RNView>{renderShowcaseContent()}</RNView>
    </View>
  );
}
