import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderComponent from "@/components/Header";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import Markdown from "react-native-markdown-display";
import Button from "@/components/ButtonsAndInputs/UButton";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function InfoScreen({}) {
  const { product } = useLocalSearchParams();
  const productData = JSON.parse(product as string);



  const tags  = [
        { label: "Sponsored", bgColor: "#EB874033", textColor: "#F5640A" },
        { label: "Food", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Pizza", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
        { label: "Dominos", bgColor: "#A6A6A633", textColor: "#3C3C4399" },
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image source={productData.image} style={styles.reactLogo} />
      }
    >
      <ThemedView className="p-4">
        <ThemedText type="description">
          Chicken Pizza - Buy one get one free
        </ThemedText>
        <ThemedView className="flex flex-row justify-between mb-4">
          {/* First column for price */}
          <ThemedView className="flex-1 bg-secondary">
            <ThemedText>
              FROM{" "}
              <ThemedText className=" font-bold text-[#000000CC]">
                {productData.shop}
              </ThemedText>{" "}
            </ThemedText>
          </ThemedView>

          <ThemedView className="flex-1 flex-row justify-end bg-secondary ">
            <ThemedView className="flex flex-row items-center mt-[1]">
              <AntDesign name="star" size={24} color="orange" />
              <ThemedText type="rating" >{productData.rating}</ThemedText>
              <ThemedText type="rating">({productData.count})</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView className="flex flex-row justify-between mb-4">
          {/* First column for price */}
          <ThemedView className="flex-1 bg-secondary">
            <ThemedText>RS.{productData.price}</ThemedText>
          </ThemedView>

          <ThemedView className="flex flex-row justify-end">
            <ThemedView className="mr-10">
              <Feather name="heart" size={24} color="black" />
            </ThemedView>

            <Feather name="share-2" size={24} color="black" />
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

        <ThemedView className="mt-2 flex flex-row flex-wrap bg-secondary">
            {productData.tags.map((tag, index) => (
              <ThemedView
                key={index}
                className="px-2 py-1 mr-2 rounded-lg"
                  style={[
                    styles.tag,
                    {backgroundColor: tag.bgColor},
                  ]}
            
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
            style={{ width:56 , height:56 , borderWidth:1 , borderColor: "#F5640A33"}}
            gradientColors={["#EB874026", "#EB874026"]}
            >
              <FontAwesome6 name="location-dot" size={24} color="orange" />
            </Button>
            <ThemedView className="flex-1 pl-3">
            <Button
            textStyle={{ color: "white", fontSize: 14 }}
            gradientColors={["#E99D23", "#F5640A"]}
          >
            Claim This Offer
          </Button>

            </ThemedView>
            
          </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
