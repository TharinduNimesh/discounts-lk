import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export default function AppHeaderLayout() {
  const router = useRouter();

  return (
    <ThemedView className="flex-row justify-between items-center px-4 pt-14 z-10 shadow-md shadow-blue-500 rounded-b-3xl">
      {/* Left side with logo and text */}
      <ThemedView className="flex-row items-center mb-4">
        {/* TouchableOpacity to make the image a button */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.push("/profile")}
        >
          <Image
            source={require("@/assets/images/welcome-1.png")}
            className="w-14 h-14 bg-blue-500 p-2 rounded-full"
          />
        </TouchableOpacity>
        <ThemedView className="ml-3">
          <ThemedText className="text-sm font-bold -mb-2">
            Good Morning
          </ThemedText>
          <ThemedText type="default" className="font-bold">
            Hello Tharindu
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView className="mb-2">
        <FontAwesome5 name="map-marker-alt" size={32} color="#F5640A" />
      </ThemedView>
    </ThemedView>
  );
}
