import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const router = useRouter();

  // Get screen dimensions for responsive design
  const { width, height } = Dimensions.get("window");

  return (
    <ImageBackground
      source={require("../assets/images/welcome-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ImageBackground
        source={require("../assets/images/welcome-1.png")}
        style={[
          styles.bottomLeftImage,
          { width: width * 1.3, height: height * 0.6 },
        ]}
        resizeMode="contain"
      />

      <View style={styles.contentContainer}>
        <ThemedView className="mb-5 relative bg-transparent">
          <ThemedText type="title" className="z-10">
            Best Deals,
          </ThemedText>
          <ThemedText type="title" className="z-10">
            Right Nearby!
          </ThemedText>
          <Image
            className="absolute -bottom-2 -right-4"
            source={require("@/assets/images/fancy-underline.png")}
            style={{ width: width * 0.5, height: height * 0.05 }}
            resizeMode="contain"
          ></Image>
        </ThemedView>
        <ThemedText type="default" className="text-left">
          Find amazing discounts near you easily with DiscountsLK. Search by
          city and discover unbeatable offers wherever you are.
        </ThemedText>
      </View>

      {/* Button positioned to the right side */}
      <TouchableOpacity
        style={[
          styles.rightButtonContainer,
          { bottom: height * 0.23, right: width * 0.1 },
        ]}
        onPress={() => router.push("/auth/sign-up")}
      >
        <LinearGradient
          colors={["#E99D23", "#F5640A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientRightButton}
        >
          <FontAwesome6 name="chevron-right" size={33} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: 0,
    left: -145,
  },
  rightButtonContainer: {
    position: "absolute",
    width: 70,
    height: 70,
  },
  gradientRightButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginTop: -390,
  },
});
