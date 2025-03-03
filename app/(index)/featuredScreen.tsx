import Featured from "@/components/leonardoUI/Featured";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";

export default function FeaturedScreen() {
  return (
    <MainView>
      <Header
        title="Featured"
        description="A visually prominent section used to highlight key content, such as promotional items or important updates."
        navBack
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="blue"
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="yellow"
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="green"
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="red"
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="cyan"
      />
      <Featured
        title="Title"
        subtitle="Subtitle"
        buttonCaption="Action Button"
        imageAddress={require("@/assets/covers/featured-sample.png")}
        tone="purple"
      />
    </MainView>
  );
}
