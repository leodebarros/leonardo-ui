import { Button } from "@/components/leonardoUI/Button";
import Input from "@/components/leonardoUI/Input";
import { useState } from "react";
import { View as RNView, Platform, StatusBar, StyleSheet } from "react-native";
import { Text } from "@/components/leonardoUI/Text";
import MainView from "@/components/leonardoUI/MainView";
import Header from "@/components/leonardoUI/Header";
import Card from "@/components/leonardoUI/Card";

export default function ConfirmationCodeScreen() {
  const [inputValue, setInputValue] = useState<string>("");

  const [smsCode, setSmsCode] = useState<string>("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });

  return (
    <MainView>
      <Header
        title="Confirmation Code"
        description="Examples of code verification screen"
        navBack
      />
      <Card>
        <Card.Title>Confirmation</Card.Title>
        <Card.Description>Please enter the code we sent you</Card.Description>
        <RNView>
          <Input
            value={smsCode}
            size="lg"
            onChangeText={setSmsCode}
            keyboardType="number-pad"
            placeholder="SMS Code"
          />
        </RNView>
        <Button caption="Verify code" />
      </Card>
    </MainView>
  );
}
