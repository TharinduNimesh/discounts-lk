import Button from "@/components/ButtonsAndInputs/UButton";
import Input from "@/components/ButtonsAndInputs/UInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import HeaderComponent from "@/components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { SUPABASE_STORAGE_URL } from "@/constants/Supabase";
import { useSupabase } from "@/hooks/useSupabase";
import * as FileSystem from "expo-file-system";
import { useToast } from "@/hooks/useToast";
import { decode } from "base64-arraybuffer";
import { useAuthStore } from "@/stores/auth.store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to store the selected image URI
  const supabase = useSupabase();
  const [selectedImageResult, setSelectedImageResult] =
    useState<ImagePicker.ImagePickerAsset | null>(null);
  const toast = useToast();

  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);
  const setLocalUri = useAuthStore((state) => state.setLocalUri);

  useEffect(() => {
    (async () => {
      if (selectedImageResult === null || user === null) {
        return;
      }

      // check image size is less than 3MB
      if ((selectedImageResult.fileSize || 0) > 3 * 1024 * 1024) {
        toast.show({
          title: "Image Size Error",
          description: "Image size should be less than 3MB",
          type: "danger",
        });
        return;
      }

      const fileName = `${user.id}.png`;

      // Read the file as a base64 string
      const fileUri = selectedImageResult.uri;
      const base64Data = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (user.profile_image !== null) {
        const { data } = await supabase.storage
          .from("profile")
          .remove([user.profile_image]);
      }

      // Upload base64 data directly to Supabase
      const { data, error } = await supabase.storage
        .from("profile")
        .upload(fileName, decode(base64Data), {
          contentType: "image/png",
          upsert: false,
          cacheControl: "3600",
        });

      if (user.profile_image === null) {
        await supabase
          .from("profile")
          .update({ profile_image: fileName })
          .eq("id", user.id);
      }

      if (error) {
        console.log(error);
        toast.show({
          title: "You Got an Error",
          description: error.message,
          type: "danger",
        });
      } else {
        await saveImageLocally(selectedImageResult.uri);
        toast.show({
          title: "Profile Image Updated",
          description: "This Will Take About An Hour to Update Everywhere",
          type: "success",
        });
      }
    })();
  }, [selectedImage]);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImageResult(result.assets[0]);
      setSelectedImage(result.assets[0].uri);
    }
  };

  const saveImageLocally = async (uri: string) => {
    const path = FileSystem.cacheDirectory + `profile/${Date.now()}.png`;
    await FileSystem.copyAsync({
      from: uri,
      to: path,
    });

    await AsyncStorage.setItem("profile_image_local_uri", path);
    await setLocalUri(path);
  };

  const profileImage = () => {
    if (selectedImage) {
      return selectedImage;
    }

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
  };

  const signOutAction = async () => {
    await signOut();
    router.push("/(tabs)/");
  };

  return (
    <ThemedView className="flex-1">
      <HeaderComponent />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView className="flex items-center h-full px-7 py-[10] bg-primary">
          <ThemedView className="mb-5 mt-5 bg-primary">
            <ThemedText type="subtitle" className="text-center">
              Your Profile
            </ThemedText>
          </ThemedView>

          {/* Card for inputs */}
          <View className="w-full bg-secondary rounded-lg shadow-lg pb-6 mt-[80]">
            <View className="relative flex items-center z-50">
              {/* Profile picture container */}
              <ThemedView className="absolute -top-[calc(133/2)] flex justify-center items-center w-[133] h-[133] rounded-full">
                {/* Profile picture pressable */}
                <Pressable onPress={selectImage}>
                  <Image
                    source={{
                      uri: profileImage(),
                    }}
                    className="w-[122] h-[122] rounded-full"
                  />
                  {/* Edit icon overlay */}
                  <View className="absolute bottom-4 -right-3 bg-[#FFDDC4] p-2 rounded-full">
                    <FontAwesome5 name="edit" size={12} color="#EB874080" />
                  </View>
                </Pressable>
              </ThemedView>
            </View>
            <ThemedView className="mt-[80] px-6">
              <Input
                placeholder="John Smith"
                label="Full Name"
                editable={false}
                selectTextOnFocus={false}
                value={user?.name ?? "John Smith"}
              />
              <View className="mt-5">
                <Input
                  placeholder="johnsmith@example.com"
                  keyboardType="email-address"
                  label="Email Address"
                  editable={false}
                  selectTextOnFocus={false}
                  value={user?.email ?? ""}
                />
              </View>
            </ThemedView>
          </View>

          {/* Sign Out Button */}
          <View className="w-full p-6 mt-5 bg-secondary/70 rounded-lg shadow-lg">
            <Button
              textStyle={{ color: "white", fontSize: 14 }}
              gradientColors={["#E99D23", "#F5640A"]}
              onPress={signOutAction}
            >
              Sign Out
            </Button>
          </View>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
