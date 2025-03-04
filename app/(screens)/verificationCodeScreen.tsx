import { Button } from "@/components/leonardoUI/Button";
import Input from "@/components/leonardoUI/Input";
import { useState } from "react";
import { View as RNView, StyleSheet } from "react-native";
import { Text } from "@/components/leonardoUI/Text";
import MainView from "@/components/leonardoUI/MainView";
import Header from "@/components/leonardoUI/Header";
import Card from "@/components/leonardoUI/Card";
import { useTheme, useThemeActions } from "@/store/themeContext";

export default function VerificationCodeScreen() {
  const [smsCode, setSmsCode] = useState<string>("");
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();

  const styles = StyleSheet.create({
    inputContainer: {
      marginTop: theme.margin.md,
    },
    resendCode: {
      color: chosenPrimaryKey,
    },
    footer: {
      marginTop: theme.margin.md,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    footerText: {
      textAlign: "center",
    },
  });

  return (
    <MainView>
      <Header
        title="Verification Code"
        description="Secure account verification"
        navBack
      />
      <Card>
        <Card.Title>Enter verification code</Card.Title>
        <Card.Description>
          We've sent a 6-digit code to your device. Please enter it below to
          verify your account.
        </Card.Description>
        <RNView style={styles.inputContainer}>
          <Input
            value={smsCode}
            size="lg"
            onChangeText={setSmsCode}
            keyboardType="number-pad"
            placeholder="Enter 6-digit code"
            label="Verification code"
            validationText="The code will expire in 10 minutes"
            validationType="info"
          />
        </RNView>
        <RNView style={{ marginTop: theme.margin.md }}>
          <Button caption="Verify account" />
        </RNView>
        <RNView style={styles.footer}>
          <Text size="sm" color="textSecondary" style={styles.footerText}>
            Didn't receive a code?{" "}
            <Text size="sm" weight="bold" style={styles.resendCode}>
              Resend Code
            </Text>
          </Text>
        </RNView>
      </Card>
    </MainView>
  );
}
