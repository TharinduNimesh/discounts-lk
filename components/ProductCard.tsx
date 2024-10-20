import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Tag from "./Tag";

interface Props {
  product: {
    index: number;
    image: string;
    name: string;
    shop: string;
    price: number;
    rating: number;
    count: number;
    tags: Array<{ label: string; isSponsored?: boolean }>;
  };
  onPress: () => void;
}

// Define the ProductCard component
export default function ProductCard({ product, onPress }: Props) {
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
          className="w-full h-[130] rounded-t-lg"
          resizeMode="cover"
        />

        {/* Product details */}
        <ThemedView className="p-3 bg-secondary rounded-b-lg">
          {/* Product name and price */}
          <ThemedView className="flex flex-row justify-between items-center">
            <Text style={styles.name}>
              {name}
            </Text>
          </ThemedView>

          <ThemedView className="flex flex-row">
            <Text style={styles.textSecondary}>FROM</Text>
            <Text style={styles.shopName}>{shop}</Text>
          </ThemedView>

          {/* Rating */}
          <ThemedView className="flex flex-row justify-between mt-2">
            {/* First column for price */}
            <ThemedView className="flex-1 bg-secondary">
              <ThemedText style={styles.textSecondary}>Rs. {price}</ThemedText>
            </ThemedView>

            <ThemedView className="flex-1 flex-row items-center bg-secondary">
              <AntDesign name="star" size={18} color="orange" />
              <ThemedText style={styles.textSecondary} className="mt-1 ml-2">
                {rating}
              </ThemedText>
              <ThemedText style={styles.textSecondary} className="mt-1 ml-1">
                ({count})
              </ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Tags Section */}
          <ThemedView className="mt-2 flex flex-row flex-wrap bg-secondary">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                isSponsored={tag.isSponsored}
                label={tag.label}
              />
            ))}
          </ThemedView>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontFamily: "Poppins",
    lineHeight: 24,
  },
  textSecondary: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#00000099",
  },
  shopName: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#000000CC",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
