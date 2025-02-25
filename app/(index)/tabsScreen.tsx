import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";

export default function TabScreen() {
  return (
    <View>
      <Header
        title="Tabs"
        description="A navigational component that organizes content into multiple panels, each accessed by a tab."
        navBack
      />
    </View>
  );
}
