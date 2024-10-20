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
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

  This offer is available for a limited time only, so head over to your nearest Domino’s today and take advantage of this unbeatable deal!
  
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
              <ThemedText type="description">{productData.name}</ThemedText>
              <ThemedView className="flex flex-row justify-between mb-4">
                {/* First column for price */}
                <ThemedView className="flex-1 bg-[#FFF6EF]">
                  <ThemedText>
                    FROM{" "}
                    <ThemedText className=" font-bold text-[#000000CC]">
                      {productData.shop}
                    </ThemedText>{" "}
                  </ThemedText>
                </ThemedView>

                <ThemedView className="flex-1 flex-row justify-end bg-[#FFF6EF] ">
                  <ThemedView className="flex flex-row items-center gap-2 bg-[#FFF6EF]">
                    <AntDesign name="star" size={24} color="orange" />
                    <ThemedView className="flex flex-row pt-1 bg-[#FFF6EF]">
                      <ThemedText>{productData.rating}</ThemedText>
                      <ThemedText>({productData.count})</ThemedText>
                    </ThemedView>
                  </ThemedView>
                </ThemedView>
              </ThemedView>

              <ThemedView className="flex flex-row justify-between mb-4">
                {/* First column for price */}
                <ThemedView className="flex-1 bg-[#FFF6EF]">
                  <ThemedText>RS.{productData.price}</ThemedText>
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
                  body: { fontSize: 18, lineHeight: 34 },
                  heading3: { color: "#000000CC", fontWeight: "bold" },
                }}
              >
                {description}
              </Markdown>

              <ThemedView className="mt-2 flex flex-row flex-wrap bg-[#FFF6EF]">
                {productData.tags.map((tag, index) => (
                  <ThemedView
                    key={index}
                    className="px-2 py-1 mr-2 rounded-[3px]"
                    style={[styles.tag, { backgroundColor: tag.bgColor }]}
                  >
                    <ThemedText
                      className="text-xs"
                      style={{ color: tag.textColor }}
                    >
                      {tag.label}
                    </ThemedText>
                  </ThemedView>
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
                  <ThemedText className="text-white">Write a Review</ThemedText>
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
                      <ThemedView className="flex-row justify-between items-center">
                        <ThemedText className="text-lg font-bold text-orange-600">
                          {review.name}
                        </ThemedText>
                        <ThemedView className="flex-row gap-2">
                          <AntDesign name="star" size={24} color="orange" />
                          <Text className="">{review.rating}</Text>
                        </ThemedView>
                      </ThemedView>
                      <ThemedText className="text-gray-500 text-xs">
                        {review.time}
                      </ThemedText>
                      <ThemedText className="text-sm mt-2">
                        {review.review}
                      </ThemedText>
                    </ThemedView>
                  </ThemedView>
                  <ThemedView style={styles.divider} />
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

              <View className="flex-row justify-between w-[50%] mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Pressable key={star} onPress={() => setRating(star)}>
                    <AntDesign
                      name="star"
                      size={24}
                      color={star <= (rating || 0) ? "orange" : "gray"}
                    />
                  </Pressable>
                ))}
              </View>

              <TextInput
                placeholder="Write your review here..."
                value={newReview}
                numberOfLines={5}
                onChangeText={setNewReview}
                className="h-auto w-full border border-gray-300 p-2 mb-4"
                multiline={true}
              />

              <Button
                style={{ width: "100%", marginTop: 12 }}
                textStyle={{ color: "white", fontSize: 14 }}
                gradientColors={["#E99D23", "#F5640A"]}
                onPress={handleReviewSubmit}
              >
                Submit Review
              </Button>
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
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 0,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
});
