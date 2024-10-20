import { Image, Pressable, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Define the ProductCard component
export default function ProductCard({ product, onPress }) {
  const router = useRouter();

  const { index, image, name, shop, price, rating, count, tags } = product;

  return (
    <ThemedView
      className="w-full rounded-lg shadow-2xl shadow-gray-400 mb-4 bg-black"
      key={index}
    >
      {/* Image on top */}
      <Pressable onPress={onPress}>
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-[98] rounded-t-lg"
          resizeMode="cover"
        />

        {/* Product details */}
        <ThemedView className="p-4 bg-secondary rounded-b-lg">
          {/* Product name and price */}
          <ThemedView className="flex flex-row justify-between items-center bg-secondary">
            <ThemedText
              className="text-lg"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </ThemedText>
          </ThemedView>

          <ThemedView className="flex flex-row justify-between items-center bg-secondary">
            <ThemedText
              className="text-lg"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              FROM {shop}
            </ThemedText>
          </ThemedView>

          {/* Rating */}
          <ThemedView className="flex flex-row justify-between">
            {/* First column for price */}
            <ThemedView className="flex-1 bg-secondary">
              <ThemedText className="text-lg">
                <ThemedText>Rs. </ThemedText>
                {price}
              </ThemedText>
            </ThemedView>

            <ThemedView className="flex-1 flex-row items-center bg-secondary">
              <AntDesign name="star" size={24} color="orange" />
              <ThemedText className="ml-2 mt-1 text-lg">{rating}</ThemedText>
              <ThemedText className="ml-1 mt-1 text-lg">({count})</ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Tags Section */}
          <ThemedView className="mt-2 flex flex-row flex-wrap bg-secondary">
            {tags.map((tag, index) => (
              <ThemedView
                key={index}
                className="px-2 py-1 mr-2 rounded-[3px]"
                style={{ backgroundColor: tag.bgColor }}
              >
                <ThemedText
                  className="text-xs"
                  style={{ color: tag.textColor }}
                >
                  {tag.label}
                </ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}
