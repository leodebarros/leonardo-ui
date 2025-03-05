import Featured, { FeaturedTone } from "@/components/leonardoUI/Featured";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";

// Define featured variants with different tones
const FEATURED_VARIANTS = [
  { tone: "blue" },
  { tone: "yellow" },
  { tone: "green" },
  { tone: "red" },
  { tone: "cyan" },
  { tone: "purple" },
];

export default function FeaturedScreen() {
  // Common props for all Featured components
  const commonProps = {
    title: "Title",
    subtitle: "Subtitle",
    buttonCaption: "Action Button",
    imageAddress: require("@/assets/covers/featured-sample.png"),
  };

  return (
    <MainView>
      <Header
        title="Featured"
        description="A visually prominent section used to highlight key content, such as promotional items or important updates."
        navBack
      />

      {FEATURED_VARIANTS.map((variant) => (
        <Featured
          key={variant.tone}
          {...commonProps}
          tone={variant.tone as FeaturedTone}
        />
      ))}
    </MainView>
  );
}
