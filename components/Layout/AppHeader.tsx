import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedView } from "../ThemedView";
import HeadEllipse from "../Ellipse";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { SUPABASE_STORAGE_URL } from "@/constants/Supabase";
import { useSupabase } from "@/hooks/useSupabase";

interface Profile {
  created_at: string;
  email: string;
  id: string;
  name: string | null;
}

export default function AppHeaderLayout() {
  const router = useRouter();
  const supabase = useSupabase();
  const [user, setUser] = useState<Profile | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const { user: userResponse, session } = await useAuth();
      if (userResponse.data.user === null && session.data.session === null) {
        console.log("User is not signed in");
        return;
      }

      if (userResponse.data.user === null) {
        return;
      }

      const { data } = await supabase
        .from("profile")
        .select("*")
        .eq("id", userResponse.data.user.id)
        .single();
      if (data === null) {
        return;
      }
      setUser(data);
      setIsAuth(true);
    })();
  }, []);

  function callUser(name?: string | null): string {
    if (name === null || name === undefined) {
      return "User";
    }
    return name.split(" ")[0];
  }

  function getGreetings(): string {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "Good Morning";
    }
    if (hours < 18) {
      return "Good Afternoon";
    }
    return "Good Evening";
  }

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
            source={{
              uri: `${SUPABASE_STORAGE_URL}/profile-images/default-user-profile.png`,
            }}
            className="w-14 h-14 p-2 rounded-full"
          />
        </TouchableOpacity>
        <ThemedView className="ml-3">
          <Text style={styles.greating} className="text-sm font-bold -mb-4">
            {getGreetings()}
          </Text>
          <Text style={styles.hello}>
            Hello {!isAuth ? "User" : callUser(user?.name)}
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
    fontFamily: "Poppins",
  },
  hello: {
    fontSize: 17,
    fontFamily: "Poppins",
  },
});
