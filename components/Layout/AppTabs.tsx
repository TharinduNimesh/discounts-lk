import React, { useState, useEffect } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Keyboard, Platform } from "react-native";
import HeadEllipse from "../Ellipse";

export default function TabLayout() {
  const activeColor = "#000000";
  const inactiveColor = "#000000";
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { display: "none" },
          tabBarHideOnKeyboard: true,
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

      {!keyboardVisible && (
        <View style={styles.ellipseContainer}>
          <HeadEllipse />
        </View>
      )}
    </>
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
    elevation: 0,
    borderTopWidth: 0,
  },
  searchContainer: {
    backgroundColor: "#ff6347",
    borderRadius: 40,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 15 : 15,
    left: "50%",
    transform: [{ translateX: -35 }],
    zIndex: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
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
    bottom: Platform.OS === "ios" ? 60 : 61.2,
    left: 0,
    right: 0,
    zIndex: 9,
  },
});
