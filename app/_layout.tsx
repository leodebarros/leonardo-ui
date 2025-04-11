import React, { useEffect } from "react";
import { View as RNView, StyleSheet, Platform } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import "react-native-reanimated";

import { ThemeProvider } from "@/store/themeContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "#1C1C1C",
    },
    container: {
      flex: 1,
      ...(Platform.OS === "web" && {
        maxWidth: 550,
        marginVertical: "0%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: 0,
        borderColor: "#D0D0D0",
      }),
    },
  });

  return (
    <ThemeProvider>
      <RNView style={styles.root}>
        <RNView style={styles.container}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(index)" options={{ headerShown: false }} />
            <Stack.Screen name="(templates)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </RNView>
      </RNView>
    </ThemeProvider>
  );
}
