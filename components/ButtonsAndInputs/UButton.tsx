import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  gradientColors?: string[];
};

export default function Button({
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
  gradientColors = ["#6200ee", "#6200ff"],
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <LinearGradient
        colors={gradientColors}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBackground}
      >
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins",
    // fontWeight: "semibold",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
});
