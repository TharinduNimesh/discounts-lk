import { View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export default function BottomEllipse({ height = 28 }) {
  return (
    <View
      style={{
        width: "100%",
        height,
      }}
    >
      <Svg
        width="100%"
        height={height}
        viewBox="0 0 390 15"
        preserveAspectRatio="none"
        fill="none"
      >
        <Ellipse cx="195" cy="14" rx="195" ry="14" fill="white" />
      </Svg>
    </View>
  );
}
