import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Ellipse from "@/components/Ellipse";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "expo-router";
import products from "@/scripts/products.json";
import Input from "@/components/ButtonsAndInputs/UInput";
import { AntDesign } from "@expo/vector-icons";

export default function SearchScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All" },
    { name: "Grocery" },
    { name: "Hotels" },
    { name: "Rest" },
    { name: "Fries" },
    { name: "Pasta" },
    // Add more categories as needed
  ];

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <ThemedView>
      <ThemedView className="bg-secondary">
        <ThemedView className="p-6 mt-6">
          <ThemedView className="flex-row items-center bg-secondary rounded-full p-3 border-2 border-[#CCCCCC]">
            <AntDesign name="search1" size={24} color="#B2B2B2" />
            <TextInput
              className="ml-2 text-[#B2B2B2]  flex-1"
              placeholder="Store, Product, etc."
              // value={searchText}
              // onChangeText={setSearchText}
            />
          </ThemedView>
        </ThemedView>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
        >
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={{
                marginTop: 10,
                marginBottom: 1,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderBottomWidth: 3,
                backgroundColor:
                  selectedCategory === category.name ? "#D9D9D94D" : "#ffffff",
                borderBottomColor:
                  selectedCategory === category.name ? "#000000" : "#A6A6A630",
              }}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Text
                style={{
                  color:
                    selectedCategory === category.name ? "#000000" : "#333",
                  fontSize: 14,
                }}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </ThemedView>

      <ScrollView className="bg-primary">
        <ThemedView className="flex-1 px-2 mt-4 bg-primary mb-16">
          {/* Discounts Section */}
          <ThemedText className="text-2xl mb-3" type="subtitle">
            Result Of “Dominos”
          </ThemedText>

          {/* Product List */}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onPress={() =>
                router.push({
                  pathname: "/product_info",
                  params: { product: JSON.stringify(product) },
                })
              }
            />
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
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
