import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  const activeColor = "#000000"; // Active tab color
  const inactiveColor = "#000000"; // Inactive tab color

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? activeColor : inactiveColor}
              style={focused && styles.activeIcon}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.searchContainer}>
              <View style={styles.searchback}>
                <Ionicons
                  name="search"
                  size={35}
                  color="white"
                  style={styles.searchIcon}
                />
              </View>
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={focused ? activeColor : inactiveColor}
              style={focused && styles.activeIcon}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#f8f8f8",
    borderTopWidth: 2,
    borderColor: "#ddd",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  searchContainer: {
    backgroundColor: "#ff6347",
    borderRadius: 40,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    left: "50%",
    transform: [{ translateX: -35 }],
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  searchback: {
    // Empty if no additional styles needed
  },
  searchIcon: {
    fontSize: 35,
    color: "#ffffff",
  },
  activeIcon: {
    transform: [{ scale: 1.1 }],
  },
});
