import React, { useState } from "react";
import { ScrollView, StyleSheet, View as RNView } from "react-native";
import { useTheme, useThemeActions } from "@/store/themeContext";

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
import { Callout } from "@/components/leonardoUI/Callout";

const filterOptions = [
  { label: "Banking" },
  { label: "Data" },
  { label: "Promotion" },
  { label: "Settings" },
];

export default function ShowcaseScreen() {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const [activeFilter, setActiveFilter] = useState<string>("Banking");
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const [radioSelected, setRadioSelected] = useState<string>("monthly");
  const [notificationsOn, setNotificationsOn] = useState<boolean>(true);
  const [selectedAccount, setSelectedAccount] = useState<string>("BTC");

  const accounts = [
    {
      currency: "BTC",
      balance: "1.9259",
      equivalent: "≈ 163,903.26",
    },
    {
      currency: "ETH",
      balance: "85.0380149",
      equivalent: "≈ 240,119.65",
    },
    {
      currency: "SOL",
      balance: "56.849143",
      equivalent: "≈ 11,945.03",
    },
  ];

  const currentAccount = accounts.find(
    (acc) => acc.currency === selectedAccount
  );

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingLeft: theme.padding.sm,
      marginBottom: theme.margin.lg,
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
      gap: 9,
    },
    betweenRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.margin.md,
      marginHorizontal: theme.padding.xs,
    },
    actionsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 9,
    },
    textColor: {
      color: chosenPrimaryKey,
    },
  });

  const renderBankingShowcase = () => (
    <RNView style={{ gap: 9 }}>
      <RNView>
        <Options style={{ marginBottom: 0 }} sectionTitle="Select an account">
          <Options.Select
            label={selectedAccount}
            iconName="checkcircle"
            options={[
              { label: "BTC", value: "BTC" },
              { label: "ETH", value: "ETH" },
              { label: "SOL", value: "SOL" },
            ]}
            selectedValue={selectedAccount}
            onChange={(value) => setSelectedAccount(value)}
          />
        </Options>
      </RNView>
      <Card>
        <Card.Title>
          {currentAccount?.currency} {currentAccount?.balance}
        </Card.Title>
        <Card.Description>{currentAccount?.equivalent} USD</Card.Description>
        <Card.Footer
          text="Premium Plan"
          button={<Button caption="Deposit Funds" type="primary" />}
          chipTone="yellow"
          chipSize="sm"
        />
      </Card>

      <List>
        <List.Title>Recent Transactions</List.Title>
        <List.Description>Tap on a transaction for details</List.Description>
        <List.Item
          caption="Starbucks Coffee"
          description="Friday morning"
          value="-94.50 USD"
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
        <Button
          caption="See All Transactions"
          type="outline"
          style={{ marginTop: theme.margin.lg }}
        />
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
      <Featured
        title="Get up to $25,000"
        subtitle="If approved, you'll get your money in less than 24 hours"
        buttonCaption="Apply Now"
        imageAddress={require("@/assets/covers/featured-sample.png")}
      />
      <Card cover={require("@/assets/covers/surf.png")}>
        <Card.Title>Invest with a Financial Advisor</Card.Title>
        <Card.Description>
          Looking to lose all your money? Chart your course towards your next
          bankruptcy with our expert gamblers.
        </Card.Description>
        <Card.Footer button={<Button caption="Learn More" type="outline" />} />
      </Card>
    </RNView>
  );

  const renderDataShowcase = () => (
    <RNView style={{ gap: 15 }}>
      <Callout
        title="⚠️ Storage Almost Full"
        message="Your storage is 90% full. To continue managing your data without interruptions, consider upgrading your plan."
        type="inverted"
      />
      <RNView>
        <RNView style={styles.betweenRow}>
          <RNView>
            <Text weight="semibold" color="textSidebar">
              Main Bucket
            </Text>
            <Text size="sm" color="textSecondary">
              Using 54% of 100 GB available
            </Text>
          </RNView>
          <RNView style={styles.actionsRow}>
            <Action iconName="export" type="accent" />
            <Action iconName="ellipsis1" type="accent" />
            <Action iconName="plus" type="primary" />
          </RNView>
        </RNView>
        <List>
          <List.Item
            caption="Instructions.pdf"
            description="PDF Document"
            value="9.20 MB"
            avatar={require("@/assets/avatars/pdficon.png")}
          />
          <List.Item
            caption="CookingRecipes.pdf"
            description="PDF Document"
            value="2.42 MB"
            avatar={require("@/assets/avatars/pdficon.png")}
          />
          <List.Item
            caption="magic.png"
            description="PNG Image"
            value="953 KB"
            avatar={require("@/assets/avatars/png.png")}
          />
          <List.Item
            caption="strees.webp"
            description="PNG Image"
            value="93 KB"
            avatar={require("@/assets/avatars/png.png")}
          />
          <List.Item
            caption="66fd6d40807194121.pdf"
            description="PDF Document"
            value="1.03 MB"
            avatar={require("@/assets/avatars/pdficon.png")}
          />
          <List.Item
            caption="CamScanner0.56.pdf"
            description="PDF Document"
            value="3.39 MB"
            avatar={require("@/assets/avatars/pdficon.png")}
          />
        </List>
      </RNView>

      <RNView>
        <RNView style={styles.betweenRow}>
          <RNView>
            <Text weight="semibold" color="textSidebar">
              Active buckets (5)
            </Text>
            <Text size="sm" color="textSecondary">
              Buckets are containers for data stored
            </Text>
          </RNView>
          <RNView style={styles.actionsRow}></RNView>
        </RNView>
        <List>
          <List.Item
            caption="kansas-city-team"
            description="Europe (London) eu-west-2"
            avatar={require("@/assets/avatars/storage.png")}
            showNavArrow
          />
          <List.Item
            caption="my-favorite-app"
            description="Europe (London) eu-west-2"
            avatar={require("@/assets/avatars/storage.png")}
            showNavArrow
          />
          <List.Item
            caption="songs-music"
            description="Canada (Central) ca-central-1"
            avatar={require("@/assets/avatars/storage.png")}
            showNavArrow
          />
          <List.Item
            caption="samples"
            description="United States (Ohio) us-west-2"
            avatar={require("@/assets/avatars/storage.png")}
            showNavArrow
          />
          <List.Item
            caption="expo-app"
            description="United States (Oregon) us-west-1"
            avatar={require("@/assets/avatars/storage.png")}
            showNavArrow
          />
        </List>
      </RNView>
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
          <Chip caption="Limited Time" size="sm" tone="red" />
          <Chip caption="One-use Only" size="sm" tone="yellow" />
        </RNView>
        <Button
          type="default"
          caption="Claim Coupon"
          onPress={() => setToastVisible(true)}
          style={{ marginTop: theme.margin.lg }}
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

      <Card>
        <Card.Description>Manage Account</Card.Description>
        <Button
          type="ghost"
          caption="Change Phone Number"
          onPress={() => setDialogVisible(true)}
          style={{ marginBottom: 0 }}
        />
        <Button
          type="destructive"
          caption="Delete Account"
          onPress={() => setDialogVisible(true)}
        />
      </Card>

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
      case "Data":
        return renderDataShowcase();
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
