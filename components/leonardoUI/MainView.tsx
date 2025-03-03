import { StyleSheet, Platform, ScrollView } from "react-native";
import { useTheme } from "./Theme";

interface MainViewProps {
  children: React.ReactNode;
}

export default function MainView({ children }: MainViewProps) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? 25 : 0,
      paddingHorizontal: "4%",
      paddingBottom: 90,
      backgroundColor: theme.colors.background,
    },
  });
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}
