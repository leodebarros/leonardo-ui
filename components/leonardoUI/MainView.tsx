import {
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  View as RNView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "./Theme";

interface MainViewProps {
  children: React.ReactNode;
}

export default function MainView({ children }: MainViewProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingHorizontal: "4%",
      paddingBottom: 300,
      paddingTop:
        Platform.OS === "android" ? 25 : Platform.OS === "web" ? 7 : 0,
    },
  });
  return (
    <RNView
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 75,
        }}
      >
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </RNView>
  );
}
