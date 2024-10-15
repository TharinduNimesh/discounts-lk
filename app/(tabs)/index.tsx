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

export default function ProductList() {
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

  const products = [
    {
      index: 1,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 2,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 3,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 4,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 5,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 6,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 7,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 8,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    {
      index: 9,
      image: require("@/assets/images/product.webp"),
      name: "Delicious Dominos Pizza",
      shop: "Dominos",
      price: "2499.00",
      rating: "4.4",
      count: "620",
      tags: [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
      ],
    },
    // More products...
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
          contentContainerStyle={{ paddingHorizontal: 10 }}
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
          <ProductCard key={index} product={product} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}
