import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import TabLayout from "@/components/Layout/AppTabs";
import AppHeaderLayout from "@/components/Layout/AppHeader";

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
