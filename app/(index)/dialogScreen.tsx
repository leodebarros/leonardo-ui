// DialogScreen.tsx
import React, { useState } from "react";
import { View as DefaultView } from "react-native";
import { Button, ButtonType } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import Dialog, { GhostType } from "@/components/leonardoUI/Dialog";
import { DIALOG_CONTENT } from "@/data/components";
import MainView from "@/components/leonardoUI/MainView";

export default function DialogScreen() {
  const [visibleDialog, setVisibleDialog] = useState<string | null>(null);

  return (
    <MainView>
      <Header
        title="Dialog"
        description="A modal overlay that requires user interaction, often used for confirmations, alerts, or form inputs."
        navBack
      />

      <DefaultView style={{ gap: 12 }}>
        {DIALOG_CONTENT.map((dialogItem) => {
          const { id, title, description, type } = dialogItem;
          // Determine if this dialog should be open
          const isOpen = visibleDialog === id;

          return (
            <React.Fragment key={id}>
              <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Description>{description}</Card.Description>
                <Card.Footer
                  button={
                    <Button
                      caption="Open dialog"
                      type={type as ButtonType}
                      onPress={() => setVisibleDialog(id)}
                    />
                  }
                />
              </Card>

              <Dialog
                type={type as GhostType}
                isVisible={isOpen}
                onConfirm={() => {
                  setVisibleDialog(null);
                }}
                onCancel={() => setVisibleDialog(null)}
              />
            </React.Fragment>
          );
        })}
      </DefaultView>
    </MainView>
  );
}
