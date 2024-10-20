import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import Ellipse from "./Ellipse";
import HeadEllipse from "./Ellipse";

export default function HeaderComponent() {
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <ThemedView className="flex-row justify-between items-center px-4 pt-14 z-10 shadow-md">
      {/* Left side with navigation button, logo, and text */}
      <ThemedView className="flex-row items-center mb-2">
        {/* TouchableOpacity for the back button */}
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        {/* TouchableOpacity to make the image a button */}
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          className="w-14 h-14 p-2 rounded-full"
        />
        <ThemedView className="ml-3">
          <Text style={styles.greating} className="text-sm font-bold -mb-2">
            Good Morning
          </Text>
          <Text style={styles.hello}>Hello Tharindu</Text>
        </ThemedView>
      </ThemedView>

      {/* Right side with map marker icon */}
      <ThemedView className="mb-2">
        <FontAwesome5 name="map-marker-alt" size={32} color="#F5640A" />
      </ThemedView>

      {/* Ellipse background decoration */}
      <ThemedView className="bg-transparent absolute -bottom-2.5 left-0 right-0">
        <HeadEllipse />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  greating: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: -2,
    fontFamily: "Poppins",
  },
  hello: {
    fontSize: 17,
    fontFamily: "Poppins",
  },
});
