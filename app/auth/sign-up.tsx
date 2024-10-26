import { Image, View, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/ButtonsAndInputs/UInput";
import Button from "@/components/ButtonsAndInputs/UButton";
import Divider from "@/components/ButtonsAndInputs/UDivider";
import { useSupabase } from "@/hooks/useSupabase";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { signUpValidation } from "@/validations";
import { useAuth } from "@/hooks/useAuth";

export default function SignUp() {
  const router = useRouter();
  const supabase = useSupabase();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { user, session } = await useAuth();
      if (user.data.user === null && session.data.session === null) {
        console.log("User is not signed in");
        return;
      }

      console.log("User is already signed in");
      console.log(user.data.user);
    })();
  }, []);

  // Form Value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser() {
    setLoading(true);
    if (!(await handleErrors())) {
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      toast.show({
        title: "An Error Occurred",
        description: error.message,
        type: "danger",
      });
      setLoading(false);
      return;
    }

    if (data.user?.id) {
      await supabase
        .from("profile")
        .update({
          name,
        })
        .eq("id", data.user.id);
    }

    toast.show({
      title: "Creating Account",
      description: "Please wait while we create your account",
      type: "success",
    });
    setLoading(false);
    router.push("/auth/sign-in");
  }

  async function handleErrors(): Promise<boolean> {
    const errors = await signUpValidation({
      name,
      email,
      password,
    });
    if (errors.length > 0) {
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
              onChangeText={setName}
            />
          </ThemedView>
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
            onPress={createUser}
            isLoading={loading}
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
