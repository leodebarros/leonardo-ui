import React, { useState } from "react";
import { ScrollView, View as RNView, StyleSheet } from "react-native";
import { Text } from "@/components/leonardoUI/Text";
import Header from "@/components/leonardoUI/Header";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { Options } from "@/components/leonardoUI/Options";
import Tabs from "@/components/leonardoUI/Tabs";
import Badge from "@/components/leonardoUI/Badge";
import MainView from "@/components/leonardoUI/MainView";
import Dialog from "@/components/leonardoUI/Dialog";
import { useTheme } from "@/store/themeContext";

const TermsAndConditionsScreen = () => {
  const theme = useTheme();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const allRequiredConsentsGiven = termsAccepted && privacyAccepted;

  const handleContinue = () => {
    if (allRequiredConsentsGiven) {
      console.log("All required consents given, proceeding...");
    } else {
      setShowDialog(true);
    }
  };

  const styles = StyleSheet.create({
    termsCard: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
  });

  return (
    <MainView>
      <Header
        title="Terms & Conditions"
        description="Please review and accept our terms to continue"
        navBack
      />

      <RNView style={{ gap: 12 }}>
        <Tabs type="outline" defaultActiveTab="terms">
          <Tabs.Tab id="terms" label="Terms" />
          <Tabs.Tab id="privacy" label="Privacy" />
          <Tabs.Tab id="cookies" label="Cookies" />

          <Tabs.TabContent tabId="terms">
            <Card style={styles.termsCard}>
              <Card.Title>Terms of Service</Card.Title>
              <Card.Description>Last updated: March 5, 2025</Card.Description>

              <ScrollView style={{ height: "auto" }}>
                <Text size="sm">
                  <Text weight="bold" size="sm">
                    1. INTRODUCTION
                  </Text>
                  {"\n\n"}
                  Welcome to Our Application ("App"). By using our App, you
                  agree to these Terms of Service. Please read them carefully.
                  {"\n\n"}
                  <Text weight="bold" size="sm">
                    2. ACCEPTANCE OF TERMS
                  </Text>
                  {"\n\n"}
                  By accessing or using our App, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms. If you
                  do not agree to these Terms, please do not use our App.
                  {"\n\n"}
                  <Text weight="bold" size="sm">
                    3. USER ACCOUNTS
                  </Text>
                  {"\n\n"}
                  3.1 You may be required to create an account to access certain
                  features of our App. You are responsible for maintaining the
                  confidentiality of your account credentials.{"\n\n"}
                  3.2 You agree to provide accurate and complete information
                  when creating your account and to update such information to
                  keep it accurate and current.{"\n\n"}
                  <Text weight="bold" size="sm">
                    4. USER RESPONSIBILITIES
                  </Text>
                  {"\n\n"}
                  4.1 You agree not to use our App for any illegal purposes or
                  in violation of any applicable local, state, national, or
                  international law.{"\n\n"}
                  4.2 You agree not to attempt to gain unauthorized access to
                  any portion of the App or any other systems or networks
                  connected to the App.{"\n\n"}
                  <Text weight="bold" size="sm">
                    5. INTELLECTUAL PROPERTY
                  </Text>
                  {"\n\n"}
                  5.1 Our App and its content, features, and functionality are
                  owned by us and are protected by copyright, trademark, and
                  other intellectual property laws.{"\n\n"}
                  5.2 You may not reproduce, distribute, modify, create
                  derivative works of, publicly display, publicly perform,
                  republish, download, store, or transmit any of the material on
                  our App.
                  {"\n\n"}
                  <Text weight="bold" size="sm">
                    6. LIMITATION OF LIABILITY
                  </Text>
                  {"\n\n"}
                  6.1 In no event will we, our affiliates, or our licensors be
                  liable for damages of any kind arising from the use of our
                  App, including but not limited to direct, indirect,
                  incidental, punitive, and consequential damages.{"\n\n"}
                  <Text weight="bold" size="sm">
                    7. CHANGES TO TERMS
                  </Text>
                  {"\n\n"}
                  7.1 We reserve the right to modify these Terms at any time.
                  Updated Terms will be posted on this screen. Your continued
                  use of the App after any such changes constitutes your
                  acceptance of the new Terms.{"\n\n"}
                  <Text weight="bold" size="sm">
                    8. TERMINATION
                  </Text>
                  {"\n\n"}
                  8.1 We reserve the right to terminate or suspend your account
                  and access to our App at our sole discretion, without notice,
                  for conduct that we believe violates these Terms or is harmful
                  to other users of the App, us, or third parties, or for any
                  other reason.
                </Text>
              </ScrollView>
            </Card>
          </Tabs.TabContent>

          <Tabs.TabContent tabId="privacy">
            <Card style={styles.termsCard}>
              <Card.Title>Privacy Policy</Card.Title>
              <Card.Description>Last updated: March 5, 2025</Card.Description>
              <ScrollView
                style={{
                  height: "auto",
                }}
              >
                <Text size="sm">
                  <Text weight="bold" size="sm">
                    1. INFORMATION WE COLLECT
                  </Text>
                  {"\n\n"}
                  1.1 Personal Information: We may collect personal information
                  that you provide directly to us, such as your name, email
                  address, and phone number when you register for an account.
                  {"\n\n"}
                  1.2 Usage Data: We automatically collect certain information
                  about your device and how you interact with our App, including
                  IP address, device type, operating system, and app usage
                  statistics.{"\n\n"}
                  <Text weight="bold" size="sm">
                    2. HOW WE USE YOUR INFORMATION
                  </Text>
                  {"\n\n"}
                  2.1 To provide and maintain our App{"\n"}
                  2.2 To notify you about changes to our App{"\n"}
                  2.3 To allow you to participate in interactive features{"\n"}
                  2.4 To provide customer support{"\n"}
                  2.5 To gather analysis or valuable information to improve our
                  App{"\n"}
                  2.6 To monitor the usage of our App{"\n"}
                  2.7 To detect, prevent and address technical issues{"\n\n"}
                  <Text weight="bold" size="sm">
                    3. DATA RETENTION
                  </Text>
                  {"\n\n"}
                  We will retain your personal information only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  {"\n\n"}
                  <Text weight="bold" size="sm">
                    4. DATA SECURITY
                  </Text>
                  {"\n\n"}
                  The security of your data is important to us, but remember
                  that no method of transmission over the Internet or method of
                  electronic storage is 100% secure.{"\n\n"}
                  <Text weight="bold" size="sm">
                    5. YOUR RIGHTS
                  </Text>
                  {"\n\n"}
                  5.1 You have the right to access, update or delete your
                  personal information{"\n"}
                  5.2 You have the right to opt-out of marketing communications
                  {"\n"}
                  5.3 You have the right to request a copy of your personal data
                  {"\n\n"}
                  <Text weight="bold" size="sm">
                    6. CHANGES TO THIS POLICY
                  </Text>
                  {"\n\n"}
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this screen.
                </Text>
              </ScrollView>
            </Card>
          </Tabs.TabContent>

          <Tabs.TabContent tabId="cookies">
            <Card style={styles.termsCard}>
              <Card.Title>Cookie Policy</Card.Title>
              <Card.Description>Last updated: March 5, 2025</Card.Description>
              <ScrollView style={{ height: "auto" }}>
                <Text size="sm">
                  <Text weight="bold" size="sm">
                    1. WHAT ARE COOKIES
                  </Text>
                  {"\n\n"}
                  Cookies are small text files that are stored on your device
                  when you visit a website or use an app. They are widely used
                  to make websites and apps work more efficiently and provide
                  information to the owners.{"\n\n"}
                  <Text weight="bold" size="sm">
                    2. HOW WE USE COOKIES
                  </Text>
                  {"\n\n"}
                  2.1 Essential Cookies: Required for the basic functionality of
                  the App{"\n"}
                  2.2 Preference Cookies: Allow us to remember your preferences
                  and settings{"\n"}
                  2.3 Analytics Cookies: Help us understand how you use our App
                  {"\n"}
                  2.4 Marketing Cookies: Used to track visitors across websites
                  to display relevant advertisements{"\n\n"}
                  <Text weight="bold" size="sm">
                    3. MANAGING COOKIES
                  </Text>
                  {"\n\n"}
                  Most mobile devices allow you to control cookies through their
                  settings. Please refer to your device's help documentation for
                  more information on how to manage cookie settings.{"\n\n"}
                  <Text weight="bold" size="sm">
                    4. THIRD-PARTY COOKIES
                  </Text>
                  {"\n\n"}
                  We may use third-party services that use cookies, such as
                  analytics providers and advertising networks. These third
                  parties may use cookies to collect information about your use
                  of our App.
                </Text>
              </ScrollView>
            </Card>
          </Tabs.TabContent>
        </Tabs>

        <RNView>
          <Options sectionTitle="Your Consent">
            <Options.Switch
              iconName="checkcircleo"
              label="Terms of Service"
              description="I agree to the Terms of Service"
              type="primary"
              value={termsAccepted}
              onValueChange={setTermsAccepted}
            />

            <Options.Switch
              iconName="lock"
              label="Privacy Policy"
              description="I consent to the collection and use of my personal information as described in the Privacy Policy"
              type="primary"
              value={privacyAccepted}
              onValueChange={setPrivacyAccepted}
            />

            <Options.Switch
              iconName="mail"
              label="Marketing Communications"
              description="I agree to receive marketing communications (optional)"
              type="primary"
              value={marketingAccepted}
              onValueChange={setMarketingAccepted}
            />
          </Options>
        </RNView>

        {/* <Badge
          caption="Version 2.0.1"
          tone="neutral"
          size="sm"
          alignSelf="center"
        /> */}
      </RNView>

      <Button caption="Continue" type="primary" onPress={handleContinue} />

      <Dialog
        title="Accept Required Terms"
        message="Please accept the Terms of Service and Privacy Policy to continue."
        isVisible={showDialog}
        onCancel={() => setShowDialog(false)}
        onConfirm={() => setShowDialog(false)}
        type="primary"
      />
    </MainView>
  );
};

export default TermsAndConditionsScreen;
