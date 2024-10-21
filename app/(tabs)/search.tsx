import {
  ScrollView,
  TextInput,
  Pressable,
  Text,
  FlatList,
  View,
  Keyboard,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "expo-router";
import products from "@/scripts/products.json";

export default function SearchScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredResults, setFilteredResults] = useState(products);
  const router = useRouter();

  const categories = [
    { name: "All" },
    { name: "Grocery" },
    { name: "Hotels" },
    { name: "Rest" },
    { name: "Fries" },
    { name: "Pasta" },
    // Add more categories as needed
  ];

  const handleSearchChange = (text) => {
    setSearchText(text);
    if (text.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    setSearchText(suggestion.name);
    setSuggestions([]);
    Keyboard.dismiss();

    router.push({
      pathname: "/product_info",
      params: { product: JSON.stringify(suggestion) },
    });
  };

  const handleSearchSubmit = (text) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filteredProducts);
    setSuggestions([]); // Clear suggestions on submit
    Keyboard.dismiss(); // Dismiss keyboard after submitting search
  };

  return (
    <ThemedView>
      <ThemedView className="bg-secondary">
        {/* Search Input */}
        <ThemedView className="p-6 mt-6">
          <ThemedView className="flex-row items-center bg-secondary rounded-full p-3 border-2 border-[#CCCCCC]">
            <AntDesign name="search1" size={24} color="#B2B2B2" />
            <TextInput
              className="ml-2 text-[#B2B2B2] flex-1"
              placeholder="Store, Product, etc."
              value={searchText}
              onChangeText={handleSearchChange} // Update suggestions as user types
              onSubmitEditing={() => handleSearchSubmit(searchText)} // Trigger search on pressing "Enter" or "Done"
            />
          </ThemedView>
        </ThemedView>

        {/* Category ScrollView */}
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

      {/* Autocomplete Suggestions List */}
      {searchText.length > 0 && suggestions.length > 0 ? (
        <ThemedView className="h-full">
          <FlatList
            className="bg-primary"
            data={suggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleSuggestionSelect(item)} // Navigate to product page on selection
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Text>{item.name}</Text>
              </Pressable>
            )}
          />
        </ThemedView>
      ) : (
        <ScrollView className="bg-primary h-full">
          <ThemedView className="flex-1 px-2 mt-4 bg-primary mb-16">
            {/* Display Results Title */}
            <ThemedText className="text-2xl mb-3" type="subtitle">
              Results for “{searchText || "All"}”
            </ThemedText>

            {/* Display Filtered Products */}
            <ThemedView className="mb-48 bg-primary">
              {filteredResults.length > 0 ? (
                filteredResults.map((product, index) => (
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
                ))
              ) : (
                <ThemedText>No results found.</ThemedText>
              )}
            </ThemedView>
          </ThemedView>
        </ScrollView>
      )}
    </ThemedView>
  );
}
