import { Image, Text, TouchableOpacity, View } from "react-native";
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
          source={require("@/assets/images/welcome-1.png")}
          className="w-14 h-14 ml-2 bg-blue-500 p-2 rounded-full"
        />
        <ThemedView className="ml-3">
          <ThemedText className="text-sm font-bold -mb-2">
            Good Morning
          </ThemedText>
          <ThemedText type="default" className="font-bold">
            Hello Tharindu
          </ThemedText>
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
