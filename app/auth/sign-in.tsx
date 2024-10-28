import { Image, ScrollView, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/ButtonsAndInputs/UInput";
import Button from "@/components/ButtonsAndInputs/UButton";
import Divider from "@/components/ButtonsAndInputs/UDivider";
import { useState } from "react";
import { signInValidation } from "@/validations";
import { useToast } from "@/hooks/useToast";
import { useAuthStore } from "@/stores/auth.store";

export default function HomeScreen() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const signin = useAuthStore((state) => state.signIn);
  const setLocalUri = useAuthStore((state) => state.setLocalUri);

  // form values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    if (!handleErrors()) return;
    setIsLoading(true);

    const { error } = await signin(email, password);
    await setLocalUri();

    if (error) {
      toast.show({
        title: "An Error Occurred",
        description: error.message,
        type: "danger",
      });
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    router.push("/(tabs)");
  }

  function handleErrors() {
    const errors = signInValidation({ email, password });
    if (errors.length) {
      toast.show({
        title: "An Error Occurred",
        description: errors[0],
        type: "danger",
      });
      return false;
    }
    return true;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-primary">
      <ThemedView className="h-full px-7 py-12 bg-primary">
        <ThemedView className="mt-10 mb-5 relative bg-primary">
          <ThemedText type="title" className="text-center z-10">
            Welcome To DiscountsLK
          </ThemedText>
          <Image
            className="absolute -bottom-2 right-4"
            source={require("@/assets/images/fancy-underline.png")}
            style={{ width: 200, height: 40, resizeMode: "contain" }}
          />
        </ThemedView>

        <ThemedText type="default" className="text-center">
          Welcome back! Sign in to access your account and explore the latest
          discounts around you with DiscountsLK.
        </ThemedText>

        {/* Card for inputs */}
        <View className="w-full bg-secondary rounded-lg p-6 mt-6 shadow-lg">
          <ThemedView className="mb-5">
            <Input
              placeholder="johnsmith@example.com"
              keyboardType="email-address"
              label="Email Address"
              onChangeText={setEmail}
            />
          </ThemedView>
          <ThemedView className="mb-4">
            <Input
              placeholder="••••••••"
              keyboardType="default"
              secureTextEntry={true} // To make it a password field
              label="Password"
              onChangeText={setPassword}
            />
          </ThemedView>
          <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["#E99D23", "#F5640A"]}
            onPress={signIn}
            isLoading={isLoading}
          >
            Sign In
          </Button>
          <Divider />
          <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["black", "black"]}
            onPress={() => router.push("/auth/sign-up")}
          >
            Don't Have An Account ?
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
