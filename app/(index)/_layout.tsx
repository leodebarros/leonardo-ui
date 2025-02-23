import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <Stack>
      <Stack.Screen name="actionScreen" options={{ headerShown: false }} />
      <Stack.Screen name="buttonScreen" options={{ headerShown: false }} />
      <Stack.Screen name="chipScreen" options={{ headerShown: false }} />
      <Stack.Screen name="featuredScreen" options={{ headerShown: false }} />
      <Stack.Screen name="listScreen" options={{ headerShown: false }} />
      <Stack.Screen name="toastScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
