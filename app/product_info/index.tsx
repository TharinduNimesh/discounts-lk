import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderComponent from "@/components/Header";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function InfoScreen({}) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView className="">
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
