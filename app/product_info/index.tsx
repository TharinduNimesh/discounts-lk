import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderComponent from "@/components/Header";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useLocalSearchParams } from "expo-router";

export default function InfoScreen({}) {
  const { product } = useLocalSearchParams();
  const productData = JSON.parse(product);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={productData.image} style={styles.reactLogo} />
      }
    >
      <ThemedView className="">
        <ThemedText>{productData.name}</ThemedText>
        <ThemedText>From {productData.shop}</ThemedText>
        <ThemedText>Price: Rs. {productData.price}</ThemedText>
        <ThemedText>Rating: {productData.rating}</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
        <ThemedText>Welocom</ThemedText>
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
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
