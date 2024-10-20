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
import { LinearGradient } from "expo-linear-gradient";

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
        <ThemedView className="h-[191] rounded-3xl mb-4 mt-5">
          <LinearGradient
            colors={["#E99D23", "#F5640A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ width: "100%", height: "100%" }}
            className="p-5  rounded-3xl"
          >
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
          </LinearGradient>
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
                marginRight: 10,
                borderRadius: 20,
                backgroundColor:
                  selectedCategory === category.name ? "#000000" : "#A6A6A630",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 80,
                height: 40,
              }}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Text
                style={{
                  color:
                    selectedCategory === category.name ? "#FFFFFF" : "#686868",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight:
                    selectedCategory === category.name ? "bold" : "normal",
                  marginTop: selectedCategory !== category.name && 2,
                  paddingHorizontal: 20,
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
