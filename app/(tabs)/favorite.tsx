import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity, Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ProductCard from "@/components/ProductCard";

export default function TabTwoScreen() {
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
        {/* Discounts Section */}
        <ThemedText className="text-2xl mb-3" type="subtitle">
          Saved Discounts
        </ThemedText>

        {/* Product List */}
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}
