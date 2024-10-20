import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import HeadEllipse from "../Ellipse";

export default function TabLayout() {
  const activeColor = "#000000"; // Active tab color
  const inactiveColor = "#000000"; // Inactive tab color

  return (
    <View style={{ flex: 1 }}>
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

      {/* Adding the Ellipse behind the tab bar */}
      <View style={styles.ellipseContainer}>
        <HeadEllipse />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    height: 70,
    zIndex: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0, // Removes shadow on Android
    borderTopWidth: 0, // Removes any border at the top
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
  ellipseContainer: {
    position: "absolute",
    bottom: 61.2,
    left: 0,
    right: 0,
  },
});
