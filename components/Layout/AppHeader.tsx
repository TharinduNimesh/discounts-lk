import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import HeadEllipse from "../Ellipse";

export default function AppHeaderLayout() {
  const router = useRouter();

  return (
    <ThemedView
      style={{
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 12.5,
        elevation: 6,
      }}
      className="relative flex-row justify-between items-center px-4 pt-14 z-10 shadow-md"
    >
      {/* Left side with logo and text */}
      <ThemedView className="flex-row items-center mb-2">
        {/* TouchableOpacity to make the image a button */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.push("/profile")}
        >
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            className="w-14 h-14 p-2 rounded-full"
          />
        </TouchableOpacity>
        <ThemedView className="ml-3">
          <Text style={styles.greating} className="text-sm font-bold -mb-4">
            Good Morning
          </Text>
          <Text style={styles.hello}>
            Hello Tharindu
          </Text>
        </ThemedView>
      </ThemedView>

      <ThemedView className="mb-2">
        <FontAwesome5 name="map-marker-alt" size={32} color="#F5640A" />
      </ThemedView>

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
    fontFamily: "Poppins"
  },
  hello: {
    fontSize: 17,
    fontFamily: "Poppins"
  }
});