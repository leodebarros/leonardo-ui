import Card from "@/components/leonardoUI/Card";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";

export default function HeaderScreen() {
  return (
    <MainView>
      <Header
        title="Header"
        description="A structured title bar that provides context for a screen, often including navigation controls or descriptions."
        navBack
      />
      <Card>
        <Header
          title="Title with description and navBack"
          description="Description"
          navBack
        />
      </Card>
      <Card>
        <Header
          title="Title with description but without navBack"
          description="Description"
        />
      </Card>
      <Card>
        <Header title="Title without description but with navBack" navBack />
      </Card>
      <Card>
        <Header title="Title" />
      </Card>
    </MainView>
  );
}
