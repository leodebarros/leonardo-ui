import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import RadioButton from "@/components/leonardoUI/RadioButton";
import { View } from "@/components/leonardoUI/View";
import { StyleSheet, View as RNView } from "react-native";
import { Text } from "@/components/leonardoUI/Text";

export default function RadioButtonScreen() {
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  return (
    <View>
      <Header
        title="Radio Button"
        description="A circular selector for picking one option from multiple choices, commonly used in forms."
        navBack
      />
      <Card>
        <Card.Description>
          Allow the selection a single option from a set
        </Card.Description>

        <RNView style={{ gap: 12 }}>
          {/* Check */}
          <RNView style={styles.row}>
            <Text>Check</Text>
            <RadioButton selected={true} />
          </RNView>

          {/* Unchecked */}
          <RNView style={styles.row}>
            <Text>Unchecked</Text>
            <RadioButton selected={false} />
          </RNView>
        </RNView>
      </Card>
    </View>
  );
}
