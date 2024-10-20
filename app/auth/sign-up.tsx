import { Image, View, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/ButtonsAndInputs/UInput";
import Button from "@/components/ButtonsAndInputs/UButton";
import Divider from "@/components/ButtonsAndInputs/UDivider";

export default function SignUp() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-primary">
      <ThemedView className="flex justify-center items-center h-full px-7 py-12 bg-primary">
        <ThemedView className="mb-5 relative bg-primary">
          <ThemedText type="title" className="mt-10 z-10 text-center">
            Create New Account
          </ThemedText>
          <Image
            className="absolute -bottom-2 right-6"
            source={require("@/assets/images/fancy-underline.png")}
            style={{ width: 200, height: 40, resizeMode: "contain" }}
          />
        </ThemedView>

        <ThemedText type="default" className="text-center">
          Sign up now to unlock the best local discounts with DiscountsLK.
          Create an account and start saving today!
        </ThemedText>

        {/* Card for inputs */}
        <View className="w-full bg-secondary rounded-lg p-6 mt-6 shadow-lg">
          <ThemedView className="mb-5">
            <Input
              placeholder="John Smith"
              keyboardType="default"
              label="Your Name"
            />
          </ThemedView>
          <ThemedView className="mb-5">
            <Input
              placeholder="johnsmith@example.com"
              keyboardType="email-address"
              label="Email Address"
            />
          </ThemedView>
          <ThemedView className="mb-4">
            <Input
              placeholder="••••••••"
              keyboardType="default"
              secureTextEntry={true} // To make it a password field
              label="Password"
            />
          </ThemedView>
          <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["#E99D23", "#F5640A"]}
            onPress={() => console.log("Create Your Account")}
          >
            Create Your Account
          </Button>
          <Divider />
          <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["black", "black"]}
            onPress={() => router.push("/auth/sign-in")}
          >
            Already Have An Account ?
          </Button>
          <ThemedView className="pt-4">
            <Button
              style={{ borderWidth: 1, borderColor: "#F5640A33" }}
              textStyle={{ color: "#CE420FCC", fontSize: 14 }}
              gradientColors={["#EB874026", "#EB874026"]}
              onPress={() => router.push("/(tabs)")}
            >
              Continue Without An Account
            </Button>
          </ThemedView>
        </View>
      </ThemedView>
    </ScrollView>
  );
}
