import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";
import HeadEllipse from "./Ellipse";
import { useEffect, useState } from "react";
import { getAuthUser } from "@/hooks/getAuthUser";
import { SUPABASE_STORAGE_URL } from "@/constants/Supabase";
import { useAuthStore } from "@/stores/auth.store";

interface Profile {
  created_at: string;
  email: string;
  id: string;
  name: string | null;
  profile_image: string | null;
}

export default function HeaderComponent() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    console.log("User changed");
    setProfilePic(getProfilePic());
  }, [user]);

  useEffect(() => {
    console.log(profilePic);
  }, [profilePic]);

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

  function getProfilePic(): string {
    if (user === null || user.profile_image === null) {
      return `${SUPABASE_STORAGE_URL}/profile/default-user-profile.png`;
    }

    if (
      user.profile_image_local_uri !== null &&
      user.profile_image_local_uri !== undefined
    ) {
      return user.profile_image_local_uri;
    }

    return user.profile_image;
  }

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
          source={{
            uri:
              profilePic ||
              `${SUPABASE_STORAGE_URL}/profile/default-user-profile.png`,
          }}
          className="w-14 h-14 p-2 rounded-full"
        />
        <ThemedView className="ml-3">
          <Text style={styles.greating} className="text-sm font-bold -mb-2">
            {getGreetings()}
          </Text>
          <Text style={styles.hello}>Hello {callUser(user?.name)}</Text>
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
