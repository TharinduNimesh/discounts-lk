import Button from "@/components/ButtonsAndInputs/UButton";
import Divider from "@/components/ButtonsAndInputs/UDivider";
import Input from "@/components/ButtonsAndInputs/UInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedView className="flex items-center h-full px-7 py-[10] bg-primary">
        <ThemedView className="mb-5 bg-primary">
          <ThemedText type="subtitle" className="text-center">
            Your Profile
          </ThemedText>
        </ThemedView>

        {/* Card for inputs */}
        <View className="w-full bg-secondary rounded-lg shadow-lg pb-6 mt-[80]">
          <View className="relative flex items-center z-50">
            <ThemedView className="absolute -top-[calc(133/2)] flex justify-center items-center w-[133] h-[133] rounded-full">
              <Image
                source={require("@/assets/images/welcome-1.png")}
                className="w-[122] h-[122]  bg-blue-500 rounded-full"
              />
            </ThemedView>
            {/* <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => router.push("/profile")}
            ></TouchableOpacity> */}
          </View>
          <ThemedView className="mt-[80] px-6">
            <Input placeholder="John Smith" label="Full Name" />
            <View className="mt-3">
              <Input
                placeholder="johnsmith@example.com"
                keyboardType="email-address"
                label="Email Address"
              />
            </View>
          </ThemedView>
        </View>
        <View className="w-full p-6 mt-5 bg-secondary rounded-lg shadow-lg">
          <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["#E99D23", "#F5640A"]}
            onPress={() => console.log("Create Your Account")}
          >
            Create Your Account
          </Button>
        </View>
      </ThemedView>
    </ScrollView>
  );
}
