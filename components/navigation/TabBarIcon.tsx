// TabBarIcon Component
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: ComponentProps<typeof Ionicons>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
