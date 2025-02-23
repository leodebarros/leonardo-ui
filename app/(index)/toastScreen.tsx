import { Button } from "@/components/leonardoUI/Button";
import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import Toast from "@/components/leonardoUI/Toast";
import { View } from "@/components/leonardoUI/View";
import { View as DefaultView, StyleSheet } from "react-native";
import { useMemo, useState } from "react";
import RadioButton from "@/components/leonardoUI/RadioButton";
import { Text } from "@/components/leonardoUI/Text";

export default function ToastScreen() {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedToastType, setSelectedToastType] = useState<
    "info" | "success" | "error" | "warning"
  >("info");

  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  function handleSubmit() {
    setIsVisible(true);
  }

  const toastConfig = useMemo(() => {
    switch (selectedToastType) {
      case "success":
        return {
          title: "Congratulations",
          description: "Your transaction has been processed.",
          linkCaption: "Open blockchain explorer",
        };
      case "warning":
        return {
          title: "This action is not reversible",
          description: "Please read our docs before proceeding.",
          linkCaption: "See docs",
        };
      case "error":
        return {
          title: "Something went wrong",
          description: "Please try again later.",
          linkCaption: "Contact support",
        };
      case "info":
      default:
        return {
          title: "Upgrade to Premium",
          description: "This is a paid feature. Please upgrade your plan.",
          linkCaption: "See plans",
        };
    }
  }, [selectedToastType]);

  return (
    <View>
      <Header
        title="Toast"
        description="Show notifications on actions result"
        navBack
      />
      <Card>
        <Card.Title>Try the different toast types</Card.Title>
        <Card.Description>
          Select a type and press the trigger button
        </Card.Description>

        <DefaultView style={{ marginVertical: 12, gap: 12 }}>
          {/* INFO */}
          <DefaultView style={styles.row}>
            <Text>Info</Text>
            <RadioButton
              selected={selectedToastType === "info"}
              onPress={() => setSelectedToastType("info")}
            />
          </DefaultView>

          {/* SUCCESS */}
          <DefaultView style={styles.row}>
            <Text>Success</Text>
            <RadioButton
              selected={selectedToastType === "success"}
              onPress={() => setSelectedToastType("success")}
            />
          </DefaultView>

          {/* ERROR */}
          <DefaultView style={styles.row}>
            <Text>Error</Text>
            <RadioButton
              selected={selectedToastType === "error"}
              onPress={() => setSelectedToastType("error")}
            />
          </DefaultView>

          {/* WARNING */}
          <DefaultView style={styles.row}>
            <Text>Warning</Text>
            <RadioButton
              selected={selectedToastType === "warning"}
              onPress={() => setSelectedToastType("warning")}
            />
          </DefaultView>
        </DefaultView>

        {/* Trigger toast */}
        <Button caption="Trigger toast" type="primary" onPress={handleSubmit} />

        <Toast
          title={toastConfig.title}
          description={toastConfig.description}
          linkCaption={toastConfig.linkCaption}
          linkRoute={"/"}
          type={selectedToastType}
          isVisible={isVisible}
          onRequestClose={() => setIsVisible(false)}
        />
      </Card>
    </View>
  );
}
