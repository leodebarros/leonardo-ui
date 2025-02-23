import Featured from "@/components/leonardoUI/Featured";
import Header from "@/components/leonardoUI/Header";
import { View } from "@/components/leonardoUI/View";

export default function FeaturedScreen() {
  return (
    <View>
      <Header
        title="Featured"
        description="Outstanding featured cards to render services or promos"
        navBack
      />
      <Featured
        title="Get up to $25,000"
        subtitle="If approved, you'll get your money in less than 24 hours"
        imageAddress={require("@/assets/covers/featured-sample.png")}
      />
    </View>
  );
}
