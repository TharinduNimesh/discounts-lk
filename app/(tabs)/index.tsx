import React, { useState } from "react";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "expo-router";
import products from "@/scripts/products.json";

export default function ProductList() {
  const router = useRouter(); // Expo Router
  // State to keep track of the selected category
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

  return (
    <ScrollView className="bg-primary">
      <ThemedView className="flex-1 px-2 mt-4 bg-primary mb-16">
        {/* Card with Gradient Background */}
        <ThemedView className="h-[191] bg-[#E99D23CC] rounded-3xl p-5 mb-4">
          {/* Text on the card */}
          <ThemedText className="text-4xl text-white" type="title">
            Boost Your Sales,
          </ThemedText>
          <ThemedText className="text-4xl text-white" type="title">
            Grow with Us!
          </ThemedText>

          {/* Transparent Curved Button */}
          <TouchableOpacity
            style={{
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: "#FFFFFF4D",
              alignSelf: "flex-start",
              marginTop: 20,
            }}
            activeOpacity={0.8}
            onPress={() => console.log("Sign Up Pressed")}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}
            >
              CONTACT US
            </Text>
          </TouchableOpacity>

          {/* Rocket Image Positioned Top-Right */}
          <View style={{ position: "relative" }}>
            <Image
              source={require("@/assets/images/rocket.png")}
              style={{
                width: 240,
                height: 240,
                position: "absolute",
                top: -160,
                right: -55,
              }}
              resizeMode="cover"
            />
          </View>
        </ThemedView>

        {/* Scrollable Categories Section */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}
        >
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={{
                marginTop: 30,
                marginBottom: 40,
                alignItems: "center",
                marginRight: 10,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor:
                  selectedCategory === category.name ? "#000000" : "#A6A6A630",
              }}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Text
                style={{
                  color:
                    selectedCategory === category.name ? "#FFFFFF" : "#333",
                  fontSize: 14,
                }}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Discounts Section */}
        <ThemedText className="text-2xl mb-3" type="subtitle">
          Discounts For You
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
  );
}
