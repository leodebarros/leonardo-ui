import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";

export default function InputScreen() {
  return (
    <View>
      <Header
        title="Input"
        description="A text field for capturing user input, supporting various validations and styles."
        navBack
      />
    </View>
  );
}
