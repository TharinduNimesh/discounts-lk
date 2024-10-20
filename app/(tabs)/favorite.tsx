import React, { useState } from "react";
import { ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ProductCard from "@/components/ProductCard";
import products from "@/scripts/products.json"; // Import your JSON file
import { useRouter } from "expo-router"; // Assuming you are using expo-router

export default function TabTwoScreen() {
  const router = useRouter(); // Initialize router for navigation
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category

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
        {/* Discounts Section */}
        <ThemedText className="text-2xl mb-3" type="subtitle">
          Saved Discounts
        </ThemedText>
          
        {/* Product List */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onPress={() =>
              router.push({
                pathname: "/product_info",
                params: { product: JSON.stringify(product) }, // Passing product data
              })
            }
          />
        ))}
      </ThemedView>
    </ScrollView>
  );
}
