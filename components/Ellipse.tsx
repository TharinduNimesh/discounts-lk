import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HeadEllipse({ height = 14.5 }) {
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
        <Path
          d="M390 5.5C390 8.53757 302.696 14.5 195 14.5C87.3045 14.5 0 8.53757 0 5.5C0 2.46243 87.3045 0 195 0C302.696 0 390 2.46243 390 5.5Z"
          fill="white"
        />
      </Svg>
    </View>
  );
}
