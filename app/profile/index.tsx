import Button from "@/components/ButtonsAndInputs/UButton";
import Input from "@/components/ButtonsAndInputs/UInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import HeaderComponent from "@/components/Header";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Profile() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image URI

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
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
                      uri:
                        selectedImage ??
                        "https://randomuser.me/api/portraits/men/1.jpg",
                    }}
                    className="w-[122] h-[122] bg-blue-500 rounded-full"
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
                value="Tharindu Nimesh"
              />
              <View className="mt-3">
                <Input
                  placeholder="johnsmith@example.com"
                  keyboardType="email-address"
                  label="Email Address"
                  editable={false}
                  selectTextOnFocus={false}
                  value="tharindunimesh@eversoft.lk"
                />
              </View>
            </ThemedView>
          </View>

          {/* Sign Out Button */}
          <View className="w-full p-6 mt-5 bg-secondary rounded-lg shadow-lg">
            <Button
              textStyle={{ color: "white", fontSize: 14 }}
              gradientColors={["#E99D23", "#F5640A"]}
              onPress={() => {router.push("/auth/sign-in")}}
            >
              Sign Out
            </Button>
          </View>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
