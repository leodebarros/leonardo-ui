import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";

export default function InputScreen() {
  return (
    <MainView>
      <Header
        title="Input"
        description="A text field for capturing user input, supporting various validations and styles."
        navBack
      />
    </MainView>
  );
}
