import React from "react";
import { View, StyleSheet } from "react-native";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: "#00000033", // Line color
    borderBottomWidth: StyleSheet.hairlineWidth, // Very thin line (1 pixel)
    marginVertical: 15, // Space around the line (optional)
    width: "100%", // Full width of the parent
  },
});
