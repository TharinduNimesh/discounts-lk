import React, { useRef, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  gradientColors?: string[];
  isLoading?: boolean;
};

export default function Button({
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
  gradientColors = ["#6200ee", "#6200ff"],
  isLoading = false,
}: ButtonProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000, // Rotation duration (1 second)
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.stopAnimation(); // Stop animation when not loading
    }
  }, [isLoading]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      style={[styles.button, style, (disabled || isLoading) && styles.disabled]}
      onPress={disabled || isLoading ? undefined : onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
    >
      <LinearGradient
        colors={gradientColors}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBackground}
      >
        {isLoading && (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <MaterialCommunityIcons name="loading" size={18} color="white" />
          </Animated.View>
        )}
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    columnGap: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins",
    // fontWeight: "semibold",
    // marginTop: 2,
  },
  disabled: {
    opacity: 0.6,
  },
});
