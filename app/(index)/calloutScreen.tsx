import { Callout, CalloutType } from "@/components/leonardoUI/Callout";
import Header from "@/components/leonardoUI/Header";
import MainView from "@/components/leonardoUI/MainView";
import { View as RNView } from "react-native";
import { CALLOUT_VARIANTS } from "@/data/components";

export default function CalloutScreen() {
  return (
    <MainView>
      <Header
        title="Callout"
        description="A styled message box that provides important notices, alerts, or actions."
        navBack
      />
      <RNView style={{ gap: 16 }}>
        {CALLOUT_VARIANTS.map(({ title, description, type, buttonLabel }) => (
          <Callout
            key={type}
            type={type as CalloutType}
            title={title}
            message={description}
            buttonLabel={buttonLabel}
          />
        ))}
      </RNView>
    </MainView>
  );
}
