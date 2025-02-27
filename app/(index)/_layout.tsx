import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <Stack>
      <Stack.Screen name="actionScreen" options={{ headerShown: false }} />
      <Stack.Screen name="buttonScreen" options={{ headerShown: false }} />
      <Stack.Screen name="calloutScreen" options={{ headerShown: false }} />
      <Stack.Screen name="cardScreen" options={{ headerShown: false }} />
      <Stack.Screen name="chipScreen" options={{ headerShown: false }} />
      <Stack.Screen name="dialogScreen" options={{ headerShown: false }} />
      <Stack.Screen name="featuredScreen" options={{ headerShown: false }} />
      <Stack.Screen name="filterScreen" options={{ headerShown: false }} />
      <Stack.Screen name="headerScreen" options={{ headerShown: false }} />
      <Stack.Screen name="inputScreen" options={{ headerShown: false }} />
      <Stack.Screen name="listScreen" options={{ headerShown: false }} />
      <Stack.Screen name="optionsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="radioButtonScreen" options={{ headerShown: false }} />
      <Stack.Screen name="switchScreen" options={{ headerShown: false }} />
      <Stack.Screen name="tabsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="textScreen" options={{ headerShown: false }} />
      <Stack.Screen name="toastScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
