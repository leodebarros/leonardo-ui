import { useState } from "react";
import { View as DefaultView, ScrollView, StyleSheet } from "react-native";
import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import { View } from "@/components/leonardoUI/View";
import Header from "@/components/leonardoUI/Header";
import Dialog from "@/components/leonardoUI/Dialog";

export default function DialogScreen() {
  const [showPrimaryDialog, setShowPrimaryDialog] = useState<boolean>(false);
  const [showDefaultDialog, setShowDefaultDialog] = useState<boolean>(false);

  return (
    <View>
      <Header
        title="Dialog"
        description="A modal overlay that requires user interaction, often used for confirmations, alerts, or form inputs."
        navBack
      />
      <DefaultView style={{ gap: 12 }}>
        <Card>
          <Card.Title>Dialog</Card.Title>
          <Card.Description>Type: primary</Card.Description>
          <Card.Footer
            button={
              <Button
                caption="Open dialog"
                type="primary"
                onPress={() => setShowPrimaryDialog(true)}
              />
            }
          />
        </Card>
        <Dialog
          isVisible={showPrimaryDialog}
          onCancel={() => setShowPrimaryDialog(false)}
        />
        <Card>
          <Card.Title>Dialog</Card.Title>
          <Card.Description>Type: default</Card.Description>
          <Card.Footer
            button={
              <Button
                caption="Open dialog"
                type="default"
                onPress={() => setShowDefaultDialog(true)}
              />
            }
          />
        </Card>
        <Dialog
          type="default"
          isVisible={showDefaultDialog}
          onCancel={() => setShowDefaultDialog(false)}
        />
      </DefaultView>
    </View>
  );
}
