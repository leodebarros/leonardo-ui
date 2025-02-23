import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  RefreshControl,
  View as DefaultView,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "./Theme";

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  onRefresh?: () => void;
  refreshing?: boolean;
  scrollRef?: React.RefObject<any>; // Replace any with your scroll ref type
  [key: string]: any; // For otherProps
}

export function View({
  style,
  children,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  onRefresh,
  refreshing = false,
  scrollRef,
  ...otherProps
}: CustomViewProps) {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <DefaultView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingTop: insets.top,
        },
        style,
      ]}
      {...otherProps}
    >
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback>
          {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            refreshControl={
              onRefresh && (
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              )
            }
            // @ts-ignore
            contentContainerStyle={{
              flex: justifyContent === "flex-start" ? 0 : 1, // Maybe improve this line later
              alignItems: alignItems,
              justifyContent: justifyContent,
              paddingHorizontal: "4%",
              paddingBottom: 90,
            }}
          >
            {children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
