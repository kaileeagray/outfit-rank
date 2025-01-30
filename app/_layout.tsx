import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Tabs navigation */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Standalone screens */}
      <Stack.Screen name="create-poll" options={{ title: 'Create Poll' }} />
    </Stack>
  );
}
