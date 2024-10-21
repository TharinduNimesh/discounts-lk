import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import HeaderComponent from "@/components/Header";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Markdown from "react-native-markdown-display";
import Button from "@/components/ButtonsAndInputs/UButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import Tag from "@/components/Tag";
import Question from "@/components/Question";

export default function InfoScreen({}) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // state
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState<number | null>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleReviewSubmit = useCallback(() => {
    // dismiss the bottom sheet
    bottomSheetModalRef.current?.dismiss();

    // Reset the state
    setNewReview("");
    setRating(null);
  }, [newReview, rating]);

  const router = useRouter();
  const { product } = useLocalSearchParams();
  const productData = JSON.parse(product as string);

  const reviews = [
    {
      id: "1",
      name: "THARINDU NIMESH",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "1 Hour Ago",
      rating: 4.5,
      review: "Two pizzas for the price of one? Count me in! 🍕🔥",
    },
    {
      id: "2",
      name: "JOHN SMITH",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "2 Days Ago",
      rating: 5,
      review:
        "Just grabbed this offer at Domino's Kelaniya! Can’t believe I got a free pizza!",
    },
    {
      id: "3",
      name: "MICHAEL SMITH",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      time: "1 Month Ago",
      rating: 3.5,
      review: "Two pizzas for the price of one? Count me in! 🍕🔥",
    },
  ];

  const description = `
  Craving delicious pizza? Domino's has an irresistible deal just for you! Order a mouth-watering Chicken Pizza and get another one absolutely free! Whether you're dining solo or sharing with friends and family, this is a deal you don’t want to miss!
  
  ### Available At:
  This offer is available at select Domino’s branches across Sri Lanka,including:

  - Domino's Pizza - Colombo 7
  - Domino's Pizza - Kelaniya
  - Domino's Pizza - Negombo
  - Domino's Pizza - Maharagama
  - Domino's Pizza - Dehiwala

  ### How to redeem:

  - Visit any of the listed Domino’s locations.
  - Mention the "Buy One, Get One Free" offer.
  - Enjoy two Chicken Pizzas for the price of one!

  ### Hurry:

  This offer is available for a limited time only, so head over to your nearest Domino's today and take advantage of this unbeatable deal!
  
`;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemedView className="flex-1">
          <HeaderComponent />
          <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
              <Image
                source={{ uri: productData.image }}
                style={styles.reactLogo}
              />
            }
          >
            <ThemedView className="bg-[#FFF6EF] p-4">
              <ThemedText type="description" className="mt-1">
                {productData.name}
              </ThemedText>
              <View className="flex flex-row items-center justify-between mb-4">
                {/* First column for price */}
                <View className="flex flex-row">
                  <Text style={styles.textSecondary}>FROM</Text>
                  <Text style={styles.shopName}>{productData.shop}</Text>
                </View>

                <View className="flex-row items-center">
                  <AntDesign name="star" size={18} color="orange" />
                  <ThemedText
                    style={styles.textSecondary}
                    className="mt-1 ml-2"
                  >
                    {productData.rating}
                  </ThemedText>
                  <ThemedText
                    style={styles.textSecondary}
                    className="mt-1 ml-1"
                  >
                    ({productData.count})
                  </ThemedText>
                </View>
              </View>

              <ThemedView className="flex flex-row justify-between mb-4">
                {/* First column for price */}
                <ThemedView className="flex-1 bg-[#FFF6EF]">
                  <Text style={styles.textSecondary} className="text-lg">
                    Rs. {productData.price}
                  </Text>
                </ThemedView>

                <ThemedView className="flex flex-row justify-end bg-[#FFF6EF]">
                  <ThemedView className="mr-5 bg-[#FFF6EF]">
                    <Feather name="heart" size={24} color="black" />
                  </ThemedView>
                  <ThemedView className="mr-0 bg-[#FFF6EF]">
                    <Feather name="share-2" size={24} color="black" />
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <Markdown
                style={{
                  body: { fontSize: 18, lineHeight: 34, color: "#000000B3" },
                  heading3: { color: "#000000CC", fontWeight: "bold" },
                }}
              >
                {description}
              </Markdown>

              <ThemedView className="mt-2 flex flex-row flex-wrap bg-[#FFF6EF]">
                {productData.tags.map((tag, index) => (
                  <Tag
                    key={index}
                    label={tag.label}
                    isSponsored={tag.isSponsored}
                  />
                ))}
              </ThemedView>

              <ThemedView className="flex flex-row mt-14">
                <Button
                  style={{
                    width: 56,
                    height: 56,
                    borderWidth: 1,
                    borderColor: "#F5640A33",
                  }}
                  onPress={() => console.log("Click")}
                  gradientColors={["#EB874026", "#EB874026"]}
                >
                  <FontAwesome6 name="location-dot" size={24} color="orange" />
                </Button>
                <ThemedView className="flex-1 pl-3 bg-[#FFF6EF]">
                  <Button
                    textStyle={{ color: "white", fontSize: 14 }}
                    gradientColors={["#E99D23", "#F5640A"]}
                    onPress={() => console.log("Click")}
                  >
                    Claim This Offer
                  </Button>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            {/* Reviews Section */}
            <ThemedView className="">
              <ThemedView className="flex-row justify-between p-4">
                <ThemedText type="subtitle">Reviews</ThemedText>
                <Pressable
                  onPress={handlePresentModalPress}
                  className="bg-black px-4 rounded justify-center items-center"
                >
                  <ThemedText className="text-white mt-1">
                    Write a Review
                  </ThemedText>
                </Pressable>
              </ThemedView>
              {reviews.map((review) => (
                <ThemedView key={review.id}>
                  {/* Add key here */}
                  <ThemedView className="flex-row rounded-lg p-4">
                    <Image
                      source={{ uri: review.avatar }}
                      className="w-12 h-12 rounded-full"
                    />
                    <ThemedView className="ml-4 flex-1">
                      <ThemedText className="text-gray-500 text-xs">
                        {review.time}
                      </ThemedText>
                      <ThemedView className="flex-row justify-between items-center">
                        <ThemedText className="text-lg font-bold text-orange-600">
                          {review.name}
                        </ThemedText>
                        <ThemedView className="flex-row gap-2">
                          <AntDesign name="star" size={24} color="orange" />
                          <Text className="">{review.rating}</Text>
                        </ThemedView>
                      </ThemedView>
                      <ThemedText className="text-sm mt-2">
                        {review.review}
                      </ThemedText>
                    </ThemedView>
                  </ThemedView>
                  <View className="w-full px-10">
                    <ThemedView style={styles.divider} />
                  </View>
                </ThemedView>
              ))}
            </ThemedView>
          </ParallaxScrollView>

          {/* BottomSheetModal for writing a review */}
          <BottomSheetModal ref={bottomSheetModalRef} snapPoints={["60%"]}>
            <BottomSheetView style={styles.contentContainer}>
              <ThemedText type="subtitle" className="mb-5">
                Write a Review
              </ThemedText>

              <View className="flex flex-row w-full">
                <View>
                  <View className="w-10 h-10 bg-black rounded-full" />
                </View>
                <View className="flex-1 pl-2">
                  <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                    Tharindu Nimesh
                  </Text>
                  <Text style={{ fontFamily: "Poppins", color: "#00000080" }}>
                    Reviews are public and include your name and profile photo.
                  </Text>
                </View>
              </View>

              <View className="flex flex-row justify-between w-2/3 mb-5 self-center mt-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Pressable key={star} onPress={() => setRating(star)}>
                    <AntDesign
                      name="star"
                      size={32}
                      color={star <= (rating || 0) ? "orange" : "gray"}
                    />
                  </Pressable>
                ))}
              </View>

              <TextInput
                placeholder="Write your review here... (Optional)"
                value={newReview}
                onChangeText={setNewReview}
                className="h-auto w-full border border-gray-300 p-2 mb-4 rounded-lg"
                style={{ fontFamily: "Poppins", fontSize: 14 }}
                multiline={true}
              />

              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
                className="mt-4"
              >
                Tell Us more (Optional)
              </Text>

              <View className="flex flex-row w-full mt-4">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 0 }}
                >
                  <Question
                    question="Do you recommend this product to others ?"
                    answers={["Yes", "No"]}
                    selectedAnswer="Yes"
                  />

                  <Question
                    question="Are you satisfied with the quality of the product ?"
                    answers={["Yes", "No"]}
                  />

                  <Question
                    question="Do you like other products from this shop ?"
                    answers={["Yes", "No"]}
                    selectedAnswer="No"
                  />
                </ScrollView>
              </View>

              <View className="mt-8 w-full">
                <Button
                  style={{ width: "100%", marginTop: 12 }}
                  textStyle={{ color: "white", fontSize: 14 }}
                  gradientColors={["#E99D23", "#F5640A"]}
                  onPress={handleReviewSubmit}
                >
                  Submit Review
                </Button>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </ThemedView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  divider: {
    borderBottomColor: "#00000099",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 0,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textSecondary: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#00000099",
  },
  shopName: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#000000CC",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
