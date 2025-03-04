import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen name="loginScreen" options={{ headerShown: false }} />
      <Stack.Screen
        name="verificationCodeScreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
