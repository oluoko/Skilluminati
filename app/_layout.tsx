import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/theme.context";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/onboarding/index" />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
