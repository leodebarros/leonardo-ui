import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import { Text } from "@/components/leonardoUI/Text";
import { View } from "@/components/leonardoUI/View";
import { View as RNView } from "react-native";

export default function TextScreen() {
  return (
    <View>
      <Header
        title="Text"
        description="Elegant, simple and conveying text"
        navBack
      />
      <Card>
        <Card.Title>xs</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="xs">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      <Card>
        <Card.Title>sm</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="sm">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      <Card>
        <Card.Title>base</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="base">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      <Card>
        <Card.Title>md</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="md">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      <Card>
        <Card.Title>lg</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="lg">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
      <Card>
        <Card.Title>xl</Card.Title>
        <Card.Description>normal</Card.Description>
        <Text size="xl">The quick brown fox jumps over the lazy dog.</Text>
      </Card>
    </View>
  );
}
