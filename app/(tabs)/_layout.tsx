import React from "react";
import { ThemedView } from "@/components/ThemedView";
import AppHeaderLayout from "@/components/AppHeader";
import TabLayout from "@/components/AppTabs";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

export default function AppLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView className="flex-1 bg-primary">
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <AppHeaderLayout />
      <TabLayout />
    </ThemedView>
  );
}
